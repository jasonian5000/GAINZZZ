const getUserId = async () => {
    let local = localStorage.getItem('supabase.auth.token')
    const parsed = JSON.parse(local)
    const userID = await parsed.currentSession.user.id
    return await userID
}

export const userSignUp = async (
    firstName,
    lastName,
    username,
    email,
    password
) => {
    const body = { firstName, lastName, username, email, password }
    await fetch('http://localhost:3001/sign_up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    console.log( body,'user created')
}

export const userSignIn = async (email, password) => {
    const body = {
        email,
        password,
    }
    const sessionData = await fetch('http://localhost:3001/sign_in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const json = await sessionData.json()
    // make if else statement that tells someone to 
    // confirm email after they have signed up 
    const sendSession = {
        currentSession: json.session,
        expiresAt: json.session.expires_at,
    }
    localStorage.setItem('supabase.auth.token', JSON.stringify(sendSession))
}
export const userSignOut = async navigate => {
    localStorage.removeItem('supabase.auth.token')
    window.alert('You have been signed out!')
    navigate('/login_page')
}

export const trainerDropDown = async () => {
    const trainers = await fetch('http://localhost:3001/trainer_dropdown', {
        method: 'GET',
    })
    const ptTable = trainers.json()
    return ptTable
}

// export const findUser = async () => {
//     const { data } = await supabase.from('userTable').select()
//     console.log(data)
// }

export const getAcctInfo = async () => {
    const userID = await getUserId()
    const body = { userID: userID }
    const personalInfo = await fetch('http://localhost:3001/acct_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const AcctInfo = personalInfo.json()
    return AcctInfo
}

export const updateAcctInfo = async updatedInfo => {
    const userID = await getUserId()
    const body = {
        updatedInfo,
        userID: userID,
    }
    await fetch('http://localhost:3001/update_acct_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    console.log('user updated')
}

export const getUserFavorites = async () => {
    const userID = await getUserId()
    const body = { userID: userID }
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
}

export const addToFavorites = async (workoutID) => {
    const userID = await getUserId()
    const body = { workoutID, userID }
    await fetch('http://localhost:3001/add_favorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    console.log('added to favorites')
}



