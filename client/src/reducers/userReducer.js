const initialState = {
    session: undefined,
    userData: undefined,
    weightData: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            }
        case 'SET_SESSION':
            return {
                ...state,
                session: action.payload,
            }
        case 'SET_WEIGHT_DATA':
            return {
                ...state,
                weightData: action.payload,
            }
        default:
            return state
    }
}

export default userReducer
