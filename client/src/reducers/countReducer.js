const initialState = {
    workoutCount:[]
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