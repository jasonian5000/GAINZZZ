const captureUserSignUp = (e) => {
  e.preventDefault();
  let input = {
    firstName: e.target.form[0].value,
    lastName: e.target.form[1].value,
    username: e.target.form[2].value,
    email: e.target.form[3].value,
    password: e.target.form[4].value,
  };
  return input;
};

const captureAccountInformation = (e) => {
  e.preventDefault()
  let input = {
    height: e.target.form[0],
    gender: e.target.form[1],
    weight: e.target.form[2],
    bmi: e.target.form[3],
    age: e.target.form[4],
    bodyfat: e.target.form[5],
    totalBurnedCalories: e.target.form[6]
  }
  return input
}

const setSignIn = (e) => {
  e.preventDefault();
  let data = {
    email: e.target.form[0].value,
    password: e.target.form[1].value,
  };
  return data;
}







export {
    captureUserSignUp,
    setSignIn,
    captureAccountInformation,
}
