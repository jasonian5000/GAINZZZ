import getUserId from "./getUserId"
import getAccessToken from "./getAccessToken"
import serverURL from "./serverURL"

const getAcctInfo = async () => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token }
    const personalInfo = await fetch(`${serverURL}/acct_info`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const AcctInfo = await personalInfo.json()
    return AcctInfo
}

export default getAcctInfo