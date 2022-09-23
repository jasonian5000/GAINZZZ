import { refineDate } from './accountInformation'
export const serverURL = 'http://localhost:3001'
// export const serverURL = 'https://gainzzzz.herokuapp.com'

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
    try {
        await fetch(`${serverURL}/sign_up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log('user created')
        alert('please confirm you email address to sign in')
    } catch (error) {
        console.log(error)
    }
}

export const userSignIn = async (email, password) => {
    const body = {
        email,
        password,
    }
    try {
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
    } catch (error) {
        console.log(error)
    }
}

export const userSignOut = () => {
    try {
        localStorage.removeItem('supabase.auth.token')
        console.log('You have been signed out!')
    } catch (error) {
        console.log(error)
    }
}

export const trainerInfo = async () => {
    try {
        const trainers = await fetch(`${serverURL}/trainer_info`, {
            method: 'GET',
        })
        const ptTable = trainers.json()
        return ptTable
    } catch (error) {
        console.log(error)
    }
}

export const getAcctInfo = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    try {
        const personalInfo = await fetch(`${serverURL}/acct_info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const AcctInfo = await personalInfo.json()
        return AcctInfo
    } catch (error) {
        console.log(error)
    }
}

export const updateAcctInfo = async updatedInfo => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = {
        updatedInfo,
        userID,
        access_token,
    }
    try {
        await fetch(`${serverURL}/update_acct_info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log('user updated')
    } catch (error) {
        console.log(error)
    }
}

export const getUserFavorites = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    try {
        const response = await fetch(`${serverURL}/get_favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const favoritesIdList = await response.json()
        return favoritesIdList
    } catch (error) {
        console.log(error)
    }
}

export const addToFavorites = async workoutID => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { workoutID, userID, access_token }
    try {
        await fetch(`${serverURL}/add_favorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        window.alert('added to favorites')
    } catch (error) {
        console.log(error)
    }
}

export const removeFavorite = async workoutID => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, workoutID, access_token }
    try {
        await fetch(`${serverURL}/remove_favorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log('remove favorite request sent')
    } catch (error) {
        console.log(error)
    }
}

export const deleteAcct = async (password) => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token, password }
    try {
        await fetch(`${serverURL}/delete_acct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log('work you bastard')
    } catch (error) {
        console.log('wtf you pos')
        console.log(error)
    }
}

export const getWeightData = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    try {
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
    } catch (error) {
        console.log(error)
    }
}

export const fetchWorkoutsCompleted = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    try {
        const data = await fetch(`${serverURL}/get_workouts_completed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const completed = await data.json()
        console.log(completed)
        return completed
    } catch (error) {
        console.log(error)
    }
}

export const sendWorkoutsCompleted = async workoutsCompleted => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = {
        workoutsCompleted,
        userID,
        access_token,
    }
    try {
        await fetch(`${serverURL}/update_workouts_completed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log('workouts completed updated')
    } catch (error) {
        console.log(error)
    }
}