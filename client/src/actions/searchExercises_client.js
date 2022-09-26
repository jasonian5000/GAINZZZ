import { serverURL } from './supabase_client'

export const searchExercises = async (searchInput, dispatch) => {
    let body = { searchInput: searchInput }
    let search = await fetch(`${serverURL}/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    let results = await search.json()
    await dispatch({ type: 'SET_SEARCH_RESULTS', payload: results })
}

export const markFavorites = (favorites, workoutID) => {
    let check = ""
    favorites.find(favorite => {
        if (favorite.id === workoutID) {
            check = true
            return true
        } else {
            check = false
            return false
        }
    })
    return check 
}

