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
    console.log('user created')
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

// export const setFavoriteWorkouts = async () => {
//     const { data, error } = await supabase.from('favoriteWorkouts').insert([
//         {
//             created_at: new Date(),
//             updated_at: new Date(),
//             workoutID: '2407',
//             gif: 'http://d205bpvrqc9yn1.cloudfront.net/2407.gif',
//             workoutName: 'barbell biceps curl (with arm blaster)',
//             targetMuscle: 'biceps',
//         },
//     ])
//     if (data === true) {
//         console.log(data)
//     } else {
//         console.error(error)
//     }
// }

const getUserId = async () => {
    let local = localStorage.getItem('supabase.auth.token')
    const parsed = JSON.parse(local)
    const userID = await parsed.currentSession.user.id
    return await userID
}

export const addAccountInformation = async (
    height,
    gender,
    weight,
    bmi,
    age,
    bodyFat,
    totalBurnedCalories,
    personalTrainer
) => {
    const userID = await getUserId()
    const body = {
        height,
        gender,
        weight,
        bmi,
        age,
        bodyFat,
        totalBurnedCalories,
        personalTrainer,
        userID: userID,
    }
    await fetch('http://localhost:3001/add_acct_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    console.log('user created')
}

export const getUserFavorites = async () => {
    const userID = await getUserId()
    const body = {userID: userID}
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