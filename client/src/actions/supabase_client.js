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
        await fetch('http://localhost:3001/sign_up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log(body, 'user created')
        alert('please confirm you email address to sign in')
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}

export const userSignIn = async (email, password) => {
    const body = {
        email,
        password,
    }
    try {
        const sessionData = await fetch('http://localhost:3001/sign_in', {
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
        alert('something went wrong')
    }
}

export const userSignOut = navigate => {
    try {
        localStorage.removeItem('supabase.auth.token')
        window.alert('You have been signed out!')
        navigate('/login_page')
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}

export const trainerInfo = async () => {
    try {
        const trainers = await fetch('http://localhost:3001/trainer_info', {
            method: 'GET',
        })
        const ptTable = trainers.json()
        return ptTable
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}

export const getAcctInfo = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    console.log("access token: ", access_token)
    const body = { userID,
    access_token }
    console.log(body)
    try {
        const personalInfo = await fetch('http://localhost:3001/acct_info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const AcctInfo = await personalInfo.json()
        console.log(AcctInfo)
        return AcctInfo
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}

export const updateAcctInfo = async updatedInfo => {
    const userID = await getUserId()
    const body = {
        updatedInfo,
        userID: userID,
    }
    try {
        await fetch('http://localhost:3001/update_acct_info', {
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
    const body = { userID: userID }
    try {
        const response = await fetch('http://localhost:3001/user_favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const favoritesIdList = await response.json()
        console.log(favoritesIdList)
        return favoritesIdList
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}

export const addToFavorites = async workoutID => {
    const userID = await getUserId()
    const body = { workoutID, userID }
    try {
        await fetch('http://localhost:3001/add_favorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
       window.alert('added to favorites')
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}

export const deleteAcct = async () => {
    const userID = await getUserId()
    const body = { userID: userID }
    try {
        await fetch('http://localhost:3001/delete_acct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        console.log('accout deleted')
    } catch (error) {
        console.log(error)
        alert('something went wrong')
    }
}



