import getUserId from "./getUserId"
import getAccessToken from "./getAccessToken"
import serverURL from "./serverURL"
import captureAcctInfo from "./capture-acct-info"
import getAcctInfo from "./get-acct-info"

const updateAcctInfo = async (e, info, dispatch) => {
    const updatedInfo = captureAcctInfo(e, info)
    
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
    await getAcctInfo(dispatch)
}

export default updateAcctInfo