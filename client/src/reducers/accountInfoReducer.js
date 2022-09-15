const initialState = {
    accountInfo: {},
}

const accountInformationReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "SET_PERSONAL_INFORMATION":
            return {
                ...state,
                accountInfo: action.payload
            }
        default:
            return state
    }
}

export default accountInformationReducer