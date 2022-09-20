export const setMyWorkout = (dispatch, workout) => {
    dispatch({type: 'ADD_WORKOUT',payload: workout})
}

export const addExerciseToWorkout = (dispatch, exercise) => {
    dispatch({type: 'ADD_EXERCISE',payload: exercise})
}