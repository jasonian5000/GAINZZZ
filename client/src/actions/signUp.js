import { captureUserSignUp } from "./inputs";
import { userSignUp } from "./supabase_client";

const sendSignUp = async (e, setNeedMoreToast) => {
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
    setNeedMoreToast(true)
  } else if (input.lastName.length < 2) {
    setNeedMoreToast(true)
  } else if (!validateEmail(input.email)) {
   setNeedMoreToast(true);
  } else if (input.password.length < 6) {
    setNeedMoreToast(true)
  } else {
    await userSignUp(
      input.firstName,
      input.lastName,
      input.username,
      input.email,
      input.password
    );
  }
};


export default sendSignUp;
