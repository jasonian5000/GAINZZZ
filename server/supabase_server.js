import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { getFavoriteExercises } from './searchExercises_server.js'
dotenv.config()
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
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    if (error) {
        console.log(error)
        return error
    }
    createAccount(firstName, lastName, username, email, password)
    return user
}

export const userSignIn = async (email, password) => {
    const sessionData = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    return sessionData
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
    firstName,
    lastName,
    email,
    password,
    username
) => {
    const { data, error } = await supabase.from('userTable').insert([
        {
            created_at: new Date(),
            updated_at: new Date(),
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
        },
    ])
    if (data) {
        console.log(data)
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

export const getPersonalInfo = async userID => {
    let { data: accountInfo, error } = await supabase
        .from('accountInfo')
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

export const addAccountInformation = async (
    height,
    gender,
    weight,
    bmi,
    age,
    bodyFat,
    totalBurnedCalories,
    personalTrainer,
    userID
) => {
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
            userID: userID,
        },
    ])
    if (data) {
        console.log('account info: ', data)
    } else console.log(error)
}

export const updateAcctInfo = async (
    height,
    gender,
    weight,
    bmi,
    age,
    bodyFat,
    totalBurnedCalories,
    personalTrainer,
    userID
) => {
    const { data, error } = await supabase
        .from('accountInfo')
        .update({
            updated_at: new Date(),
            height: height,
            gender: gender,
            weight: weight,
            bmi: bmi,
            age: age,
            totalBurnedCalories: totalBurnedCalories,
            bodyFat: bodyFat,
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
