export const captureUserSignUp = (e) => {
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

export const captureAcctInfo = (e, info) => {
  e.preventDefault()
  
  let height =
      e.target.form[0].value === '' ? info[0].height : e.target.form[0].value
  let weight =
      e.target.form[1].value === '' ? info[0].weight : e.target.form[1].value
    let gender =
        e.target.form[2].value === '' ? info[0].gender : e.target.form[2].value
  let age =
      e.target.form[3].value === '' ? info[0].age : e.target.form[3].value
  let personalTrainer =
      e.target.form[4].value === '' ? info[0].personalTrainer : e.target.form[4].value
  let input = {
      height,
      weight,
      gender,
      age,
      personalTrainer,
  }
  return input
}

export const setSignIn = (e) => {
  e.preventDefault();
  let data = {
    email: e.target.form[0].value,
    password: e.target.form[1].value,
  };
  return data;
}