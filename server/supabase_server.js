import fetch from 'node-fetch'
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { getFavoriteExercises } from './searchExercises_server.js'
dotenv.config()
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)

export const userSignIn = async (email, password) => {
    const sessionData = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    return sessionData
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

const createAccount = async (
    userID,
    firstName,
    lastName,
    email,
    password,
    username
) => {
    const { data, error } = await supabase.from('userTable').insert([
        {
            created_at: new Date(),
            updated_at: new Date(),
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            userID: userID,
        },
    ])
    if (data) {
        return data
    } else {
        console.log(error)
    }
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

export const updateAcctInfo = async (updatedInfo, userID, access_token) => {
    const { height, weight, gender, age, personalTrainer } = updatedInfo
    console.log("server updated info:", updatedInfo)
    try {
        let data = await fetch(`${supabaseUrl}/rest/v1/userTable?userID=eq.${userID}`, {
            method: 'POST',
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
        })
        let json = await data.json()
        console.log("the problem: ", json)
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

export const deleteUserData = async userID => {
    const { data, error } = await supabase
        .from('userTable')
        .delete()
        .eq('userID', userID)
    console.log('User data deleted')
}

const deleteUserAcct = async userID => {
    const { data: user, error } = await supabase.auth.api.deleteUser(userID)
    console.log('User auth deleted')
}
