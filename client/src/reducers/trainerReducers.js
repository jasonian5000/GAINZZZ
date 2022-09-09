const initialState = {
  trainerDropDownList: [],
};

const trainerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRAINER_DROP_DOWN_LIST":
      return {
        ...state,
        trainerDropDownList: action.payload,
      };
    default:
      return state;
  }
};

export default trainerReducers;
