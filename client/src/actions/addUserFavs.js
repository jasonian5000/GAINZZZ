import getUserId from './getUserId'
import getAccessToken from './getAccessToken'
import serverURL from './serverURL'
import { setFavWorkouts } from './workoutBuilder'

const addUserFavs = async (workoutID, setAddedFavToast, dispatch) => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { workoutID, userID, access_token }
    await fetch(`${serverURL}/add_favorite`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    await setFavWorkouts(dispatch)
    setAddedFavToast(true)
}

export default addUserFavs