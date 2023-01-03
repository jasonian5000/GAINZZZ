import serverURL from '../ui/server-url'

const getTrainerInfo = async dispatch => {
    const trainers = await fetch(`${serverURL}/trainer_info`, {
        method: 'GET',
    })
    const trainerInfo = await trainers.json()
    dispatch({ type: 'SET_TRAINER_INFO', payload: trainerInfo })
}

export default getTrainerInfo
