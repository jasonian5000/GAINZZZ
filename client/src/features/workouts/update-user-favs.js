// import getUserId from './getUserId'
// import getAccessToken from './getAccessToken'
// import serverURL from '../ui/server-url'
// import getUserFavs from './get-user-favs'

// const updateUserFavs = async (workoutID, setAddedFavToast, dispatch) => {
//     const userID = await getUserId()
//     const access_token = await getAccessToken()
//     const body = { workoutID, userID, access_token }
//     await fetch(`${serverURL}/add_favorite`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     await getUserFavs(dispatch)
//     setAddedFavToast(true)
// }

// export default updateUserFavs
