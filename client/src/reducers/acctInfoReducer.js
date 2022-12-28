const initialState = {
    acctInfo: [],
    weightData: []
}

const acctInfoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_ACCT_INFO':
            return {
                ...state,
                acctInfo: action.payload,
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

export default acctInfoReducer