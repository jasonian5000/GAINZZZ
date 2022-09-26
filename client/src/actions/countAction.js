import { fetchWorkoutsCompleted } from "./supabase_client"

export const setCount =  async (dispatch) => {
    const count = await fetchWorkoutsCompleted()
    dispatch({ type: 'SET_COUNT', payload: count })
}
