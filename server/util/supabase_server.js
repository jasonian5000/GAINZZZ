import fetch from 'node-fetch'
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
    const { user } = await supabase.auth.signUp({
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




