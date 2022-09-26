import fetch from 'node-fetch'
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config()
import { supabaseSecretKey, supabaseKey, supabaseUrl, supabase } from './supabase_auth.js'

// supabase
export const userSignIn = async (email, password) => {
    const sessionData = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    return sessionData
}

// secret
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

// supabase
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
    await createAccount(userID, firstName, lastName, email, password, username)
}

// supabase
export const getTrainerInfo = async () => {
    let { data: ptTable, error } = await supabase
        .from('ptTable')
        .select(
            'id,ptName,specialties,description,rates,testimonials,test2,test3,img'
        )
    return ptTable
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

export const getWorkoutsCompleted = async (userID, access_token) => {
    let data = await fetch(
        `${supabaseUrl}/rest/v1/userTable?select=workoutsCompleted&userID=eq.${userID}`,
        {
            headers: {
                apikey: supabaseKey,
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
    let completed = await data.json()
    return completed
}

export const updateWorkoutsCompleted = async (
    workoutsCompleted,
    userID,
    access_token
) => {
    await fetch(`${supabaseUrl}/rest/v1/userTable?userID=eq.${userID}`, {
        method: 'PATCH',
        headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            Prefer: 'return=representation',
        },
        body: JSON.stringify({
            updated_at: new Date(),
            workoutsCompleted: workoutsCompleted,
        }),
    })
}

const trackWeight = async (userID, access_token, weight) => {
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
}

export const updateAcctInfo = async (updatedInfo, userID, access_token) => {
    const { height, weight, gender, age, personalTrainer } = updatedInfo
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
    if (Number(weight) > 0) {
        trackWeight(userID, access_token, weight)
    }
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
}

const deleteUserAcct = async userID => {
    let supabase = createClient(supabaseUrl, supabaseSecretKey)
    await supabase.auth.api.deleteUser(userID)
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
}

export const destroyAllUserData = async (userID, access_token, password) => {
    const validPassword = await passwordCheck(userID, access_token, password)
    if (validPassword === true) {
        await deleteUserData(userID, access_token)
        await deleteAllFavorites(userID, access_token)
        await deleteTrackedWeight(userID, access_token)
        await deleteUserAcct(userID)
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
