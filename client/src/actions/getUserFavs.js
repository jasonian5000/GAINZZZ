import getUserId from './getUserId'
import getAccessToken from './getAccessToken'
import serverURL from './serverURL'

const getUserFavs = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    const response = await fetch(`${serverURL}/get_favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const favoritesIdList = await response.json()
    return favoritesIdList
}

export default getUserFavs