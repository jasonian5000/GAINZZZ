import fetch from "node-fetch"
import { supabaseKey, supabaseUrl } from "./supabase_auth.js"

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
