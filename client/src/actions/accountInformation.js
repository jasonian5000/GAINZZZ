import { trainerDropDown, addAccountInformation, getPersonalInfo } from "./supabase_client";
import { captureAccountInformation } from "./inputs";

const getTrainers = async (dispatch) => {
  const trainerList = await trainerDropDown();
  dispatch({ type: "SET_TRAINER_DROP_DOWN_LIST", payload: trainerList });
};

const getUserPersonalInfo = async (dispatch) => {
  const personalInfo = await getPersonalInfo()
  dispatch({ type: 'SET_PERSONAL_INFORMATION', payload: personalInfo })
}

const sendAccountInformation = async (e) => {
  const input = captureAccountInformation(e);
  if (input.height.length < 1) {
    window.alert("Please provide your height");
  } else if (input.gender.length < 1) {
    window.alert("Please provide your gender");
  } else if (input.weight.length < 1) {
    window.alert("Please provide your weight");
  } else {
    await addAccountInformation(
      input?.height,
      input?.gender,
      input?.weight,
      input?.bmi,
      input?.age,
      input?.bodyFat,
      input?.totalBurnedCalories,
      input.personalTrainer
    );
    window.alert("Information added Succesfully");
  }
};

export { getTrainers, sendAccountInformation, getUserPersonalInfo }
