import getTrainerInfo from "./getTrainerInfo"


const getPersonalTrainers = async (dispatch) => {
    const trainers = await getTrainerInfo()
    dispatch({ type: 'SET_TRAINER_INFO', payload: trainers})
}




export {
    getPersonalTrainers
}

