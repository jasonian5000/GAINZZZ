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

const createAccount = async (
    userID,
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
            userID: userID,
        },
    ])
    if (data) {
        return data
    } else {
        console.log(error)
    }
}

export const userSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        return error
    } else {
        console.log('signed out')
        window.alert('You have been signed out!')
    }
}

export const getTrainerInfo = async () => {
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
        return accountInfo
    } else {
        console.log(error)
    }
}

export const updateAcctInfo = async (updatedInfo, userID) => {
    const { height, weight, gender, age, personalTrainer } = updatedInfo
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
        console.log('account info updated')
    } else console.log(error)
}

const getFavoritesIds = async userID => {
    const { data, error } = await supabase
        .from('favoriteWorkouts')
        .select()
        .eq('userID', userID)
    return data
}

export const getUserFavorites = async userID => {
    const tableData = await getFavoritesIds(userID)
    const favoriteExercises = getFavoriteExercises(tableData)
    return favoriteExercises
}

export const addToFavorites = async (userID, workoutID) => {
    const { data, error } = await supabase.from('favoriteWorkouts').insert([
        {
            created_at: new Date(),
            updated_at: new Date(),
            workoutID: workoutID,
            userID: userID,
        },
    ])
    if (data) {
        console.log(data)
    } else console.log(error)
}

export const deleteUserData = async userID => {
    const { data, error } = await supabase
        .from('userTable')
        .delete()
        .eq('userID', userID)
    console.log('User data deleted')
}

const deleteUserAcct = async userID => {
    const { data: user, error } = await supabase.auth.api.deleteUser(userID)
    console.log('User auth deleted')
}
