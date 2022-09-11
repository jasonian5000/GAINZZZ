import { captureUserSignUp } from "./inputs";
import { userSignUp } from "./supabase";

const sendSignUp = async (e) => {
  const regex =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
  const input = captureUserSignUp(e);
  const validateEmail = (email) => {
    if (regex.test(email)) {
      return true;
    }
    return false;
  };
  if (input.firstName.length < 1) {
    window.alert("Please provide your first name");
  } else if (input.lastName.length < 2) {
    window.alert("Please provide your last name");
  } else if (!validateEmail(input.email)) {
    window.alert("Please provide a valid email address");
  } else if (input.password.length < 6) {
    window.alert(
      "Please make sure your password contains at least six characters"
    );
  } else {
    let userEntry = await userSignUp(
      input.firstName,
      input.lastName,
      input.username,
      input.email,
      input.password
    );
    console.log(userEntry);
  }
};

export default sendSignUp