// import getUserId from './getUserId.js'
// import getAccessToken from './getAccessToken.js'
// import serverURL from '../ui/server-url.js'
// import getCompletedWorkouts from './getCompletedWorkouts.js'

// const updateCompletedWorkouts = async dispatch => {
//     const currentCompleted = await getCompletedWorkouts()
//     const newCompleted = Number(currentCompleted[0].workoutsCompleted) + 1
//     dispatch({ type: 'SET_COUNT', payload: newCompleted })
//     const userID = await getUserId()
//     const access_token = await getAccessToken()
//     const body = {
//         newCompleted,
//         userID,
//         access_token,
//     }
//     await fetch(`${serverURL}/update_workouts_completed`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
// }

// export default updateCompletedWorkouts
