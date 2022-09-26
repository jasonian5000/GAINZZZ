import { refineDate } from './accountInformation'
import { setFavWorkouts } from './workoutBuilder'
// export const serverURL = 'http://localhost:3001'
export const serverURL = 'https://gainzzzz.herokuapp.com'

export const getUserId = async () => {
    let local = localStorage.getItem('supabase.auth.token')
    const parsed = JSON.parse(local)
    const userID = await parsed.currentSession.user.id
    return await userID
}

export const getAccessToken = async () => {
    let local = localStorage.getItem('supabase.auth.token')
    const parsed = JSON.parse(local)
    const access_token = await parsed.currentSession.access_token
    return await access_token
}

export const userSignUp = async (
    firstName,
    lastName,
    username,
    email,
    password
) => {
    const body = { firstName, lastName, username, email, password }
    await fetch(`${serverURL}/sign_up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}

export const userSignIn = async (email, password) => {
    const body = {
        email,
        password,
    }
    const sessionData = await fetch(`${serverURL}/sign_in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const json = await sessionData.json()
    const sendSession = {
        currentSession: json.session,
        expiresAt: json.session.expires_at,
    }
    localStorage.setItem('supabase.auth.token', JSON.stringify(sendSession))
}

export const userSignOut = navigate => {
    localStorage.removeItem('supabase.auth.token')
    navigate('/')
}

export const trainerInfo = async () => {
    const trainers = await fetch(`${serverURL}/trainer_info`, {
        method: 'GET',
    })
    const ptTable = trainers.json()
    return ptTable
}

export const getAcctInfo = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    const personalInfo = await fetch(`${serverURL}/acct_info`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const AcctInfo = await personalInfo.json()
    return AcctInfo
}

export const updateAcctInfo = async updatedInfo => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = {
        updatedInfo,
        userID,
        access_token,
    }
    await fetch(`${serverURL}/update_acct_info`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}

export const getUserFavorites = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    const response = await fetch(`${serverURL}/get_favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const favoritesIdList = await response.json()
    return favoritesIdList
}

export const addToFavorites = async (workoutID, setAddedFavToast, dispatch) => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { workoutID, userID, access_token }
    await fetch(`${serverURL}/add_favorite`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    await setFavWorkouts(dispatch)
    setAddedFavToast(true)
}

export const removeFavorite = async (
    workoutID,
    setRemoveFavToast,
    dispatch
) => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, workoutID, access_token }
    await fetch(`${serverURL}/remove_favorite`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    await setFavWorkouts(dispatch)
    setRemoveFavToast(true)
}

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
    let formatted = refineDate(json)
    return formatted
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
