import { trainerInfo } from "./supabase_client"


const getPersonalTrainers = async (dispatch) => {
    const trainers = await trainerInfo()
    dispatch({ type: 'SET_TRAINER_INFO', payload: trainers})
}




export {
    getPersonalTrainers
}

