import { createClient } from '@supabase/supabase-js'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)

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

// export const userSignOut = async () => {
//     const result = await fetch('http://localhost:3001/get_keys', {
//         method: 'GET',
//     })
//     const json = await result.json()
//     const { supabaseUrl, supabaseKey } = await json
//     const supabase = createClient(supabaseUrl, supabaseKey)
//     await supabase.auth.signOut()
//     console.log('signed out')
// }

export const userSignOut = async (navigate) => {
    const { error, session } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        return error
    } else {
        console.log(session)
        console.log('signed out')
        window.alert('You have been signed out!')
        navigate('/')
    }
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

// export const addAccountInformation = async (
//     height,
//     gender,
//     weight,
//     bmi,
//     age,
//     bodyFat,
//     totalBurnedCalories,
//     personalTrainer
// ) => {
//     const result = await fetch('http://localhost:3001/get_keys', {
//         method: 'GET',
//     })
//     const json = await result.json()
//     const { supabaseUrl, supabaseKey } = await json
//     const supabase = createClient(supabaseUrl, supabaseKey)
//     const access_token = supabase.auth.session().access_token
//     console.log(access_token)
//     const body = {
//         height,
//         gender,
//         weight,
//         bmi,
//         age,
//         bodyFat,
//         totalBurnedCalories,
//         personalTrainer,
//         access_token,
//     }
//     await fetch('http://localhost:3001/add_acct_info', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     console.log('user created')
// }

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
    console.log(supabase.auth)
    const { data, error } = await supabase.from('accountInfo').insert([
        {
            created_at: new Date(),
            updated_at: new Date(),
            height: height,
            gender: gender,
            weight: weight,
            bmi: bmi,
            age: age,
            totalBurnedCalories: totalBurnedCalories,
            bodyFat: bodyFat,
            personalTrainer: personalTrainer,
            userID: supabase.auth.currentUser.id,
        },
    ])
    if (data) {
        console.log('account info: ', data)
    } else console.log(error)
}
