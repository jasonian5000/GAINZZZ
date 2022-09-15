const initialState = {
    favoriteWorkouts: []
}

const favoriteWorkoutsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_FAVORITE_WORKOUTS':
            return {
                ...state,
                favoriteWorkouts: action.payload,
            }
        default:
            return state
    }
}

export default favoriteWorkoutsReducer