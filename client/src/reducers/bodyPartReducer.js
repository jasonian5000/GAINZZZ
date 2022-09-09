const initialState = {
  bodyPartList: [],
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
