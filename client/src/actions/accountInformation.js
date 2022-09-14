import { trainerDropDown, getAcctInfo, updateAcctInfo } from './supabase_client'
import { captureAcctInfo } from './inputs'

const getTrainers = async dispatch => {
    const trainerList = await trainerDropDown()
    dispatch({ type: 'SET_TRAINER_DROP_DOWN_LIST', payload: trainerList })
}

const setAcctInfo = async dispatch => {
    const personalInfo = await getAcctInfo()
    await dispatch({ type: 'SET_PERSONAL_INFORMATION', payload: personalInfo })
}

const sendAcctInfo = async (e, info) => {
    const updatedInfo = captureAcctInfo(e, info)
    console.log(updatedInfo)
    await updateAcctInfo(updatedInfo)
    window.alert('Information added Succesfully')
}

export { getTrainers, sendAcctInfo, setAcctInfo }
