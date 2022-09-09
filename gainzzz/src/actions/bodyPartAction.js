export const addBodyParts = (dispatch, bodyPartData) => {
  dispatch({ type: "SET_BODYPART_LIST", payload: bodyPartData });
};
