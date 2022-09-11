const userSignUp = async (firstName, lastName, username, email, password) => {
  const body = { firstName, lastName, username, email, password };
  const length = JSON.stringify(body).length;
  console.log(length);
  const user = await fetch("http://localhost:3001/sign_up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify(body),
  });
  const results = await user.json();
  console.log(results);
};

const findUser = () => {};
const setFavoriteWorkouts = () => {};
const createAccount = () => {};
const userSignOut = () => {};
const userSignIn = () => {};
const addAccountInformation = () => {};
const trainerDropDown = () => {};

export {
  findUser,
  setFavoriteWorkouts,
  createAccount,
  userSignUp,
  userSignIn,
  userSignOut,
  addAccountInformation,
  trainerDropDown,
};
