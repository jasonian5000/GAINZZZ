const searchExercises = (SearchInput, exercisesList, dispatch) => {
  let bodyPart = exercisesList.filter((result) =>
    result.bodyPart.toLowerCase().includes(SearchInput.toLowerCase())
  );
  let equipment = exercisesList.filter((result) =>
    result.equipment.toLowerCase().includes(SearchInput.toLowerCase())
  );
  let name = exercisesList.filter((result) =>
    result.name.toLowerCase().includes(SearchInput.toLowerCase())
  );
  let target = exercisesList.filter((result) =>
    result.target.toLowerCase().includes(SearchInput.toLowerCase())
  );
  let results = [...bodyPart, ...equipment, ...name, ...target]
  console.log(results);
  dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
};

export { searchExercises };
