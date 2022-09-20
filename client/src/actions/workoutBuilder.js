import { getUserFavorites } from "./supabase_client"

export const setFavWorkouts = async dispatch => {
    const favWorkouts = await getUserFavorites()
    await dispatch({ type: 'SET_FAVORITE_WORKOUTS', payload: favWorkouts })
}

export const randomWorkout = (arr, num) => {
    const random = [...arr].sort(() => 0.5 - Math.random())
    return random.slice(0, num)
}
