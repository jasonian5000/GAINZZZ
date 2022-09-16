import { trainerInfo, getAcctInfo, updateAcctInfo, getUserFavorites } from './supabase_client'
import { captureAcctInfo } from './inputs'

const getTrainers = async dispatch => {
    const trainerList = await trainerInfo()
    dispatch({ type: 'SET_TRAINER_DROP_DOWN_LIST', payload: trainerList })
}

const setAcctInfo = async dispatch => {
    const personalInfo = await getAcctInfo()
    await dispatch({ type: 'SET_PERSONAL_INFORMATION', payload: personalInfo })
}

const setFavWorkouts = async (dispatch) => {
    const favWorkouts = await getUserFavorites()
    await dispatch({type: 'SET_FAVORITE_WORKOUTS', payload: favWorkouts})
}

const sendAcctInfo = async (e, info) => {
    console.log("incoming info: ", info)
    const updatedInfo = captureAcctInfo(e, info)
    console.log("updated info:",updatedInfo)
    window.location.reload()
    await updateAcctInfo(updatedInfo)
    window.alert('Information added Succesfully')
}

export { getTrainers, sendAcctInfo, setAcctInfo, setFavWorkouts }
