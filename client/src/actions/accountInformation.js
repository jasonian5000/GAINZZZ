import {
    trainerInfo,
    getAcctInfo,
    updateAcctInfo,
    getWeightData,
} from './supabase_client'
import { captureAcctInfo } from './inputs'

export const getTrainers = async dispatch => {
    const trainerList = await trainerInfo()
    dispatch({ type: 'SET_TRAINER_DROP_DOWN_LIST', payload: trainerList })
}

export const setAcctInfo = async dispatch => {
    const personalInfo = await getAcctInfo()
    dispatch({ type: 'SET_PERSONAL_INFORMATION', payload: personalInfo })
}

export const sendAcctInfo = async (e, info) => {
    const updatedInfo = captureAcctInfo(e, info)
    window.location.reload()
    await updateAcctInfo(updatedInfo)
    window.alert('Information added Succesfully')
}
export const setWeightData = async dispatch => {
    const weightData = await getWeightData()
    await dispatch({ type: "SET_WEIGHT_DATA", payload: weightData})
}

const formatDate = (created_at) => {
    let months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }
    let year = created_at.substr(2, 2)
    let month = created_at.substr(5, 2)
    return `${months[month]} '${year}`
}

export const refineDate = (json) => {
    json.forEach(entry => {
        entry.created_at = formatDate(entry.created_at)
    });
    return json
}

export const setWeightRange = (weightData) => {
    let high = 0
    let low = weightData[0]?.weight
    for (let index = 0; index < weightData?.length; index++) {
        if (weightData[index]?.weight > high) {
            high = weightData[index]?.weight
        }
        if (weightData[index]?.weight < low) {
            low = weightData[index]?.weight
        }
    }
    return ({low: low - 20, high: high + 20})
}

export const bmiCalc = (height, weight) => {
    let heightM = Number(height) * 0.0254
    let weightKg = Number(weight) * 0.453592
    let num = weightKg /(heightM * heightM)
    let bmi = Math.round(num * 10) / 10
    return bmi
}
