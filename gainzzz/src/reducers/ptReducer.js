const initialState = {
  ptNameIdList: [],
};

const ptReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PT_NAME_ID_LIST":
      return {
        ...state,
        ptNameIdList: action.payload,
      };
    default:
      return state;
  }
};

export default ptReducer;
