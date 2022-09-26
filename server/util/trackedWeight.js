import fetch from "node-fetch"
import { supabaseKey, supabaseUrl } from "./supabase_auth.js"

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