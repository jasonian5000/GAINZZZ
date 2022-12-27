import getCompletedWorkouts from './getCompletedWorkouts'
import getUserFavs from './getUserFavs'
import updateCompletedWorkouts from './updateCompletedWorkouts'

export const setFavWorkouts = async dispatch => {
    const favWorkouts = await getUserFavs()
    dispatch({ type: 'SET_FAVORITE_WORKOUTS', payload: favWorkouts })
}

export const randomWorkout = (arr, num) => {
    const random = [...arr].sort(() => 0.5 - Math.random())
    return random.slice(0, num)
}

export const addWorkoutsCompleted = async () => {
    const fetchData = await getCompletedWorkouts()
    const completed = Number(fetchData[0].workoutsCompleted) + 1
    await updateCompletedWorkouts(completed)
}
