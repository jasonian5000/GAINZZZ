export const searchExercises = async (searchInput, dispatch) => {
  let body = { "searchInput": searchInput }
  let search = await fetch('http://localhost:3001/search', {
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
