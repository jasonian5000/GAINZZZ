import { trainerDropDown } from "./supabase_client"


const getPersonalTrainers = async (dispatch) => {
    const trainers = await trainerDropDown()
    dispatch({ type: 'SET_TRAINER_INFO', payload: trainers})
}




export {
    getPersonalTrainers
}

