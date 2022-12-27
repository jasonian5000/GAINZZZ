import serverURL from "./serverURL"

const getTrainerInfo = async () => {
    const trainers = await fetch(`${serverURL}/trainer_info`, {
        method: 'GET',
    })
    const ptTable = trainers.json()
    return ptTable
}

export default getTrainerInfo