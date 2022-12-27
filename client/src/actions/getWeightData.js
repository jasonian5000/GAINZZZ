import getAccessToken from "./getAccessToken"
import getUserId from "./getUserId"
import refineDate from "./refineDate"
import serverURL from "./serverURL"

const getWeightData = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    let weightData = await fetch(`${serverURL}/get_tracked_weight`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    let json = await weightData.json()
    let formattedWeightData = refineDate(json)
    return formattedWeightData
}

export default getWeightData