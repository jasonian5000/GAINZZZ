export const userSignUp = async (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  const body = { firstName, lastName, username, email, password };
  await fetch("http://localhost:3001/sign_up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const userSignIn = async (email, password) => {
  const body = { email, password };
  await fetch("http://localhost:3001/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const findUser = () => {};
export const setFavoriteWorkouts = () => {};
export const createAccount = () => {};
export const userSignOut = () => {};
export const addAccountInformation = () => {};
export const trainerDropDown = () => {};
