import {
    trainerInfo,
    getAcctInfo,
    updateAcctInfo,
    deleteAcct,
} from './supabase_client'
import { captureAcctInfo } from './inputs'

export const getTrainers = async dispatch => {
    const trainerList = await trainerInfo()
    dispatch({ type: 'SET_TRAINER_DROP_DOWN_LIST', payload: trainerList })
}

export const setAcctInfo = async dispatch => {
    const personalInfo = await getAcctInfo()
    await dispatch({ type: 'SET_PERSONAL_INFORMATION', payload: personalInfo })
}

export const sendAcctInfo = async (e, info) => {
    console.log('incoming info: ', info)
    const updatedInfo = captureAcctInfo(e, info)
    console.log('updated info:', updatedInfo)
    window.location.reload()
    await updateAcctInfo(updatedInfo)
    window.alert('Information added Succesfully')
}

export const confirmDeleteAccount = async navigate => {
    let password = prompt('Please enter your password to delete your account')
    if (password) {
        await deleteAcct(password, navigate)
    }
}

export const bmiCalc = (height, weight) => {
    let heightM = Number(height) * 0.0254
    let weightKg = Number(weight) * 0.453592
    let num = weightKg /(heightM * heightM)
    let bmi = Math.round(num * 10) / 10
    return bmi
}
