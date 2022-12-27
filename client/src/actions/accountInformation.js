import getAcctInfo from './getAcctInfo'
import updateAcctInfo from './updateAcctInfo'
import { captureAcctInfo } from './inputs'
import getWeightData from './getWeightData'

export const setAcctInfo = async dispatch => {
    const personalInfo = await getAcctInfo()
    dispatch({ type: 'SET_PERSONAL_INFORMATION', payload: personalInfo })
}

export const sendAcctInfo = async (e, info, dispatch) => {
    const updatedInfo = captureAcctInfo(e, info)
    await updateAcctInfo(updatedInfo)
    await setAcctInfo(dispatch)
}
export const setWeightData = async dispatch => {
    const weightData = await getWeightData()
    await dispatch({ type: "SET_WEIGHT_DATA", payload: weightData})
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
