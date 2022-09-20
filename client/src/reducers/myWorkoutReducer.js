const initialState = {
    myWorkout: []
}

const myWorkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':
            return {
                myWorkout: action.payload,
            }
        case 'ADD_EXERCISE':
            return {
                ...state,
                myWorkout: [...state.myWorkout, action.payload]
            }
        default:
            return state
    }
}

export default myWorkoutReducer
