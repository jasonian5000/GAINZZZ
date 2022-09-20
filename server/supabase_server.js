import fetch from 'node-fetch'
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { getFavoriteExercises } from './searchExercises_server.js'
dotenv.config()
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY
const supabaseKey = process.env.SUPABASE_KEY
const supabaseUrl = process.env.SUPABASE_URL
let supabase = createClient(supabaseUrl, supabaseKey)

export const userSignIn = async (email, password) => {
    const sessionData = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    return sessionData
}

const createAccount = async (
    userID,
    firstName,
    lastName,
    email,
    password,
    username
) => {
    await fetch(`${supabaseUrl}/rest/v1/userTable`, {
        method: 'POST',
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseSecretKey}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
        },
        body: JSON.stringify({
            created_at: new Date(),
            updated_at: new Date(),
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            userID: userID,
        }),
    })
}

export const userSignUp = async (
    firstName,
    lastName,
    username,
    email,
    password
) => {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    const userID = user.id
    if (error) {
        console.log(error)
        return error
    }
    await createAccount(userID, firstName, lastName, email, password, username)
}

export const getTrainerInfo = async () => {
    let { data: ptTable, error } = await supabase
        .from('ptTable')
        .select('id,ptName,specialties,description,rates,testimonials')
    if (ptTable) {
        return ptTable
    } else {
        console.log(error)
    }
}

export const getAcctInfo = async (userID, access_token) => {
    let data = await fetch(
        `${supabaseUrl}/rest/v1/userTable?select=height,weight,gender,age,ptTable(ptName)&userID=eq.${userID}`,
        {
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
    let accountInfo = await data.json()
    return accountInfo
}

const trackWeight = async (userID, access_token, weight) => {
    try {
        await fetch(`${supabaseUrl}/rest/v1/weightTracker`, {
            method: 'POST',
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                Prefer: 'return=representation',
            },
            body: JSON.stringify({
                created_at: new Date(),
                weight: weight,
                userID: userID,
            }),
        })
        console.log("weight tracked")
    } catch (error) {
        console.log(error)
    }
}

export const updateAcctInfo = async (updatedInfo, userID, access_token) => {
    const { height, weight, gender, age, personalTrainer } = updatedInfo
    try {
        let data = await fetch(
            `${supabaseUrl}/rest/v1/userTable?userID=eq.${userID}`,
            {
                method: 'PATCH',
                headers: {
                    apikey: supabaseKey,
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                    Prefer: 'return=representation',
                },
                body: JSON.stringify({
                    updated_at: new Date(),
                    height: height,
                    gender: gender,
                    weight: weight,
                    age: age,
                    personalTrainer: personalTrainer,
                }),
            }
        )
        await data.json()
        console.log('account update successful')
        if (Number(weight) > 0) {
            trackWeight(userID, access_token, weight)
        }
    } catch (error) {
        console.log(error)
    }
}

const getFavoritesIds = async (userID, access_token) => {
    let data = await fetch(
        `${supabaseUrl}/rest/v1/favoriteWorkouts?select=workoutID&userID=eq.${userID}`,
        {
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
    let json = await data.json()
    return json
}

export const getUserFavorites = async (userID, access_token) => {
    const tableData = await getFavoritesIds(userID, access_token)
    const favoriteExercises = getFavoriteExercises(tableData)
    return favoriteExercises
}

export const addToFavorites = async (userID, workoutID, access_token) => {
    await fetch(`${supabaseUrl}/rest/v1/favoriteWorkouts`, {
        method: 'POST',
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
        },
        body: JSON.stringify({
            created_at: new Date(),
            updated_at: new Date(),
            workoutID: workoutID,
            userID: userID,
        }),
    })
}

export const removeFavorite = async (userID, workoutID, access_token) => {
    await fetch(
        `${supabaseUrl}/rest/v1/favoriteWorkouts?userID=eq.${userID}&workoutID=eq.${workoutID}`,
        {
            method: 'DELETE',
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                Prefer: 'return=representation',
            },
        }
    )
    console.log('Work out removed from favorites')
}

const passwordCheck = async (userID, access_token, password) => {
    const data = await fetch(
        `${supabaseUrl}/rest/v1/userTable?select=password&userID=eq.${userID}`,
        {
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
    let passwordData = await data.json()
    console.log('password checked')
    return passwordData[0].password === password
}

const deleteUserData = async (userID, access_token) => {
    await fetch(`${supabaseUrl}/rest/v1/userTable?userID=eq.${userID}`, {
        method: 'DELETE',
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
        },
    })
    console.log('user personal info deleted')
}

const deleteAllFavorites = async (userID, access_token) => {
    await fetch(`${supabaseUrl}/rest/v1/favoriteWorkouts?userID=eq.${userID}`, {
        method: 'DELETE',
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
        },
    })
    console.log('all favorite workouts removed')
}

const deleteUserAcct = async userID => {
    let supabase = createClient(supabaseUrl, supabaseSecretKey)
    const { data: user, error } = await supabase.auth.api.deleteUser(userID)
    console.log('User auth deleted')
}

const deleteTrackedWeight = async (userID, access_token) => {
    await fetch(`${supabaseUrl}/rest/v1/weightTracker?userID=eq.${userID}`, {
        method: 'DELETE',
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
        },
    })
    console.log('all tracked weight removed')
}

export const destroyAllUserData = async (userID, access_token, password) => {
    const validPassword = await passwordCheck(userID, access_token, password)
    if (validPassword === true) {
        await deleteUserData(userID, access_token)
        await deleteAllFavorites(userID, access_token)
        await deleteTrackedWeight(userID, access_token)
        await deleteUserAcct(userID)
        console.log('all user data destroyed')
    } else {
        console.log('invalid password')
    }
}

export const getTrackedWeight = async (userID, access_token) => {
    let data = await fetch(
        `${supabaseUrl}/rest/v1/weightTracker?select=weight,created_at&userID=eq.${userID}`,
        {
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
    let json = await data.json()
    return json
}
