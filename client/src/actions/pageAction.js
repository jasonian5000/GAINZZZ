export const setPage =  (dispatch, value) => {
    dispatch({ type: 'SET_PAGE', payload: value })
}

export const resetPages = (dispatch) => {
    dispatch({type:'RESET_PAGES', payload: 1})
}