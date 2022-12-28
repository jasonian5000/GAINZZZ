import getAccessToken from './getAccessToken'
import getUserId from './getUserId'
import serverURL from './serverURL'

const getCompletedWorkouts = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    const data = await fetch(`${serverURL}/get_workouts_completed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const completed = await data.json()
    return completed
}

export default getCompletedWorkouts
