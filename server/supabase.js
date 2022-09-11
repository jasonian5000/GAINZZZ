import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config();
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

const userSignUp = async (firstName, lastName, username, email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error)
    return error;
  }
  let userID = user.id;
  createAccount(firstName, lastName, username, email, password, userID);
  return user;
};

const userSignIn = async (email, password) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  console.log(session);
  console.log("sign in");
  if (error) {
    console.log("sign in failed");
    return error;
  }
  return user;
};

const userSignOut = async () => {
  const { error, session } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    return error;
  }
  console.log(session);
  console.log("signed out");
};

const createAccount = async (
  firstName,
  lastName,
  userID,
  email,
  password,
  username
) => {
  const { data, error } = await supabase
    .from("userTable")
    .insert([
      {
        created_at: new Date(),
        updated_at: new Date(),
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
    ]);
  if (data) {
    console.log(data);
  } else {
    console.log(error);
  }
};

const trainerDropDown = async () => {
  let { data: ptTable, error } = await supabase
    .from("ptTable")
    .select("id,ptName");
  if (ptTable) {
    return ptTable;
  } else {
    console.log(error);
  }
};

const findUser = async () => {
  const { data } = await supabase.from("userTable").select();
  console.log(data);
};

const setFavoriteWorkouts = async () => {
  const { data, error } = await supabase.from("favoriteWorkouts").insert([
    {
      created_at: new Date(),
      updated_at: new Date(),
      workoutID: "2407",
      gif: "http://d205bpvrqc9yn1.cloudfront.net/2407.gif",
      workoutName: "barbell biceps curl (with arm blaster)",
      targetMuscle: "biceps",
    },
  ]);
  if (data === true) {
    console.log(data);
  } else {
    console.error(error);
  }
};

const addAccountInformation = async (
  height,
  gender,
  weight,
  bmi,
  age,
  bodyFat,
  totalBurnedCalories,
  personalTrainer
) => {
  const { data, error } = await supabase.from("accountInfo").insert([
    {
      created_at: new Date(),
      updated_at: new Date(),
      height: height,
      gender: gender,
      weight: weight,
      bmi: bmi,
      age: age,
      totalBurnedCalories: totalBurnedCalories,
      bodyFat: bodyFat,
      personalTrainer: personalTrainer,
    },
  ]);
  if (data) {
    console.log("account info: ", data);
  } else console.log(error);
};

export {
  findUser,
  setFavoriteWorkouts,
  createAccount,
  userSignUp,
  userSignIn,
  userSignOut,
  addAccountInformation,
  trainerDropDown
};
