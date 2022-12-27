import getCompletedWorkouts from "./getCompletedWorkouts"

export const setCount =  async (dispatch) => {
    const count = await getCompletedWorkouts()
    dispatch({ type: 'SET_COUNT', payload: count })
}
