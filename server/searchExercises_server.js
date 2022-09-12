import { exercisesList } from "./exercisesList.js";

const searchExercises = (SearchInput) => {
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
  return results
};

export { searchExercises };
