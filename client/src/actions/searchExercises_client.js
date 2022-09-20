export const searchExercises = async (searchInput, dispatch) => {
  let body = { "searchInput": searchInput }
  let search = await fetch('https://gainzzzz.herokuapp.com/search', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
  })
  let results = await search.json()
  console.log(results);
  await dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
};
