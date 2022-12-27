import getUserId from "./getUserId"
import getAccessToken from "./getAccessToken"
import serverURL from "./serverURL"
import userSignOut from "./userSignOut"

const deleteUserAcct = async (password, navigate) => {
    const userID = await getUserId()
    const access_token = await getAccessToken()
    const body = { userID, access_token, password }
    await fetch(`${serverURL}/delete_acct`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    userSignOut(navigate)
}

export default deleteUserAcct