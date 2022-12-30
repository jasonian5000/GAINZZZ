// import getUserId from './getUserId'
// import getAccessToken from './getAccessToken'
// import serverURL from '../ui/server-url'
// import getUserFavs from '../workouts/get-user-favs'

// const removeUserFav = async (workoutID, setRemoveFavToast, dispatch) => {
//     const userID = await getUserId()
//     const access_token = await getAccessToken()
//     const body = { userID, workoutID, access_token }
//     await fetch(`${serverURL}/remove_favorite`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     await getUserFavs(dispatch)
//     setRemoveFavToast(true)
// }

// export default removeUserFav
