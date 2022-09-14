import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { getFavoriteExercises } from './searchExercises_server.js'
dotenv.config()
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)

export const userSignIn = async (email, password) => {
    const sessionData = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    return sessionData
}

export const userSignUp = async (
    firstName,
    lastName,
    username,
    email,
    password
) => {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    const userID = user.id
    if (error) {
        console.log(error)
        return error
    }
    await createAccount(userID, firstName, lastName, email, password, username)
}

export const userSignOut = async () => {
    const { error, session } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        return error
    } else {
        console.log(session)
        console.log('signed out')
        window.alert('You have been signed out!')
    }
}

const createAccount = async (
    userID,
    firstName,
    lastName,
    email,
    password,
    username
) => {
    console.log( "firstName: ",firstName, "last name",lastName, "email",email, "password",password, "username",username)
    const { data, error } = await supabase.from('userTable').insert([
        {
            created_at: new Date(),
            updated_at: new Date(),
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            userID: userID,
        },
    ])
    console.log("data", data)
    if (data) {
        return data
    } else {
        console.log(error)
    }
}

export const sendSupabase = () => {
    const result = { supabaseKey: supabaseKey, supabaseUrl: supabaseUrl }
    return result
}

export const trainerDropDown = async () => {
    let { data: ptTable, error } = await supabase
        .from('ptTable')
        .select('id,ptName,specialties,description,rates,testimonials')
    if (ptTable) {
        return ptTable
    } else {
        console.log(error)
    }
}


export const getAcctInfo = async userID => {
    let { data: accountInfo, error } = await supabase
        .from('userTable')
        .select('*, ptTable(ptName)')
        .eq('userID', userID)
    if (accountInfo) {
        console.log(accountInfo)
        return accountInfo
    } else {
        console.log(error)
    }
}

export const userAddToFavorites = async () => {
    const { data, error } = await supabase.from('favoriteWorkouts').insert([
        {
            created_at: new Date(),
            updated_at: new Date(),
            workoutID: workoutID,
        },
    ])
    if (data) {
        console.log(data)
    } else {
        console.log(error)
    }
}

// export const addAccountInformation = async (
//     height,
//     gender,
//     weight,
//     bmi,
//     age,
//     bodyFat,
//     totalBurnedCalories,
//     personalTrainer,
//     userID
// ) => {
//     const { data, error } = await supabase.from('accountInfo').insert([
//         {
//             created_at: new Date(),
//             updated_at: new Date(),
//             height: height,
//             gender: gender,
//             weight: weight,
//             bmi: bmi,
//             age: age,
//             totalBurnedCalories: totalBurnedCalories,
//             bodyFat: bodyFat,
//             personalTrainer: personalTrainer,
//             userID: userID,
//         },
//     ])
//     if (data) {
//         console.log('account info: ', data)
//     } else console.log(error)
// }

export const updateAcctInfo = async (
    updatedInfo,
    userID
) => {
    console.log(updatedInfo)
    const { height, weight, gender, age, personalTrainer} = updatedInfo
    const { data, error } = await supabase
        .from('userTable')
        .update({
            updated_at: new Date(),
            height: height,
            gender: gender,
            weight: weight,
            age: age,
            personalTrainer: personalTrainer,
        })
        .eq('userID', userID)
    if (data) {
        console.log('account info: ', data)
    } else console.log(error)
}

const getFavoritesIds = async userID => {
    const { data, error } = await supabase
        .from('favoriteWorkouts')
        .select()
        .eq('userID', userID)
    return data
    console.log(data)
}

export const getUserFavorites = async userID => {
    const tableData = await getFavoritesIds(userID)
    const favoriteExercises = getFavoriteExercises(tableData)
    return favoriteExercises
}

export const addToFavorites = async (userID, workoutID) => {
    const { data, error } = await supabase.from('favoriteWorkouts').insert([
        {
            workoutID: workoutID,
            userID: userID,
        },
    ])
    if (data) {
        console.log(data)
    } else console.log(error)
}
