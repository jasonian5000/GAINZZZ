import getUserId from './getUserId.js'
import refineDate from './refineDate.js'
import getAccessToken from './getAccessToken.js'
import serverURL from './serverURL.js'
import userSignOut from './userSignOut.js'

export const deleteAcct = async (password, navigate) => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token, password }
    await fetch(`${serverURL}/delete_acct`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    userSignOut(navigate)
}

export const getWeightData = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    let weightData = await fetch(`${serverURL}/get_tracked_weight`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    let json = await weightData.json()
    let formattedWeightData = refineDate(json)
    return formattedWeightData
}

export const fetchWorkoutsCompleted = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    const data = await fetch(`${serverURL}/get_workouts_completed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const completed = await data.json()
    return completed
}

export const sendWorkoutsCompleted = async workoutsCompleted => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = {
        workoutsCompleted,
        userID,
        access_token,
    }
    await fetch(`${serverURL}/update_workouts_completed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}
