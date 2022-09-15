const initialState = {
    Page: 1,
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                Page: action.payload,
            }
        case 'RESET_PAGES':
            return {
                Page: action.payload,
            }
        default:
            return state
    }
}

export default pageReducer
