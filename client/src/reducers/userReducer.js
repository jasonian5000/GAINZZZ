const initialState = {
    session: undefined,
    weightData: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
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
