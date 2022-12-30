// import getUserId from "./getUserId"
// import getAccessToken from "./getAccessToken"
// import serverURL from "./serverURL"

// const getAcctInfo = async (dispatch) => {
//     const userID = await getUserId()
//     const access_token = await getAccessToken()
//     const body = { userID, access_token }
//     const data = await fetch(`${serverURL}/acct_info`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     const acctInfo = await data.json()
//     dispatch({ type: 'SET_ACCT_INFO', payload: acctInfo })
// }

// export default getAcctInfo