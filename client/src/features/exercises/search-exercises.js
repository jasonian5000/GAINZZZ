import serverURL from "features/ui/server-url"

// const searchExercises = async (searchInput, dispatch) => {
//     let body = { searchInput: searchInput }
//     let search = await fetch(`${serverURL}/search`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     let results = await search.json()
//     await dispatch({ type: 'SET_SEARCH_RESULTS', payload: results })
// }

const searchExercises = async (searchInput, dispatch) => {
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

export default searchExercises