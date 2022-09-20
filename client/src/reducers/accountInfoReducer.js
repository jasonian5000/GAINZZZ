const initialState = {
    accountInfo: [],
    weightData: []
}

const accountInformationReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_PERSONAL_INFORMATION':
            return {
                ...state,
                accountInfo: action.payload,
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

export default accountInformationReducer