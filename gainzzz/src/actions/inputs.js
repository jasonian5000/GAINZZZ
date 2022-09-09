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

const captureAccountInformation = (e, trainers) => {
  // console.log("This is the trainers")
  e.preventDefault()
  let input = {
    height: e.target.form[0].value,
    gender: e.target.form[1].value,
    weight: e.target.form[2].value,
    bmi: e.target.form[3].value,
    age: e.target.form[4].value,
    bodyFat: e.target.form[5].value,
    totalBurnedCalories: e.target.form[6].value,
    personalTrainer: trainers
  };
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
