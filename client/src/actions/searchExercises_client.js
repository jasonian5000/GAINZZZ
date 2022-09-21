import { getUserFavorites, serverURL } from './supabase_client'

export const searchExercises = async (searchInput, dispatch) => {
    let body = { searchInput: searchInput }
    let search = await fetch(`${serverURL}:3001/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    let results = await search.json()
    console.log(results)
    await dispatch({ type: 'SET_SEARCH_RESULTS', payload: results })
}

export const markFavorites = async workoutID => {
    let favorites = await getUserFavorites()
    console.log(favorites)
    favorites.forEach(favorite => {
        if (favorite.id === workoutID) {
          console.log(true)
            return true
        } else {
          console.log(false)
            return false
        }
    })
    
}
