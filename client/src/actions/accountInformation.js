import { ptDropDown } from "./supabase";

const getTrainers = async (dispatch) => {
  const trainerData = await ptDropDown();
  dispatch({ type: "SET_PT_NAME_ID_LIST", payload: trainerData });
};

export { getTrainers }