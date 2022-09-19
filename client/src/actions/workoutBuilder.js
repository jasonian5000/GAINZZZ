import { getUserFavorites } from "./supabase_client"

export const setFavWorkouts = async dispatch => {
    const favWorkouts = await getUserFavorites()
    await dispatch({ type: 'SET_FAVORITE_WORKOUTS', payload: favWorkouts })
}
