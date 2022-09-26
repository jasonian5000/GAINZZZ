import fetch from 'node-fetch'
import { supabaseSecretKey, supabaseKey, supabaseUrl } from './supabase_auth.js'
import { createClient } from '@supabase/supabase-js'

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
