import getUserId from './getUserId.js'
import getAccessToken from './getAccessToken.js'
import serverURL from './serverURL.js'

const updateCompletedWorkouts = async workoutsCompleted => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = {
        workoutsCompleted,
        userID,
        access_token,
    }
    await fetch(`${serverURL}/update_workouts_completed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}

export default updateCompletedWorkouts