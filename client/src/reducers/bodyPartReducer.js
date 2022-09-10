const initialState = {
  bodyPartList: [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ],
};

const bodyPartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BODYPART_LIST":
      return {
        ...state,
        bodyPartList: action.payload,
      };
    default:
      return state;
  }
};

export default bodyPartReducer;
