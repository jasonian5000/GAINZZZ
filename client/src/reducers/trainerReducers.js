const initialState = {
  trainerDropDownList: [],
  trainers: [],
};

const trainerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRAINER_DROP_DOWN_LIST":
      return {
        ...state,
        trainerDropDownList: action.payload,
      };
    case "SET_TRAINER_INFO":
      return {
        ...state,
        trainers: action.payload
      }
    default:
      return state;
  }
};

export default trainerReducers;
