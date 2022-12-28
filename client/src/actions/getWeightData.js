import formatWeightData from "./formatWeightData"
import getAccessToken from "./getAccessToken"
import getUserId from "./getUserId"
import serverURL from "./serverURL"

const getWeightData = async dispatch => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    let data = await fetch(`${serverURL}/get_tracked_weight`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    let json = await data.json()
    let weightData = formatWeightData(json)
    dispatch({ type: 'SET_WEIGHT_DATA', payload: weightData })
}

export default getWeightData