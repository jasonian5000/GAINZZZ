import { supabaseKey, supabaseUrl } from "./supabase_auth.js"
import { getFavoriteExercises } from './searchExercises.js'

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
}
