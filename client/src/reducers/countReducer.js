const initialState = {
    workoutCount: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                workoutCount: action.payload,
            }
        default:
            return state
    }
}

export default countReducer