import getUserId from "./getUserId"
import getAccessToken from "./getAccessToken"
import serverURL from "./serverURL"

const updateAcctInfo = async updatedInfo => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = {
        updatedInfo,
        userID,
        access_token,
    }
    await fetch(`${serverURL}/update_acct_info`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}

export default updateAcctInfo