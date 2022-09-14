import React from "react";
import "../../css/loginPage.css";
import { userSignIn } from "../../actions/supabase_client";
import { setSignIn } from "../../actions/inputs";
import { checkToken } from "../../actions/checkToken";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate()
  const signIn = async (e, navigate) => {
    let data =  setSignIn(e);
    await userSignIn(data.email, data.password);
    let token = checkToken();
    if (token) {
      window.alert("Signed in. Welcome to GAINZZZ!")
      navigate("/")
    } else {
      window.alert("Invalid Credentials")
      navigate('/login_page')
    }
  };
  return (
      <>
          <div className="login-Container">
              <div className="form-container">
                  <form action="" className="login-form">
                      <h1>MEMBER SIGN IN</h1>
                      <input
                          className="emailLoginInput"
                          placeholder="Email"
                          type="email"
                      ></input>
                      <input
                          className="passwordLoginInput"
                          placeholder="Password"
                          type="password"
                      ></input>
                      <div className="underPassword">
                          <div className="stayContainer">
                              <p>Stay Signed in?</p>
                              <input className="keepSignIn" type="checkbox" />
                          </div>
                          <p>Forget Password?</p>
                      </div>
                      <button
                          id="submit-btn"
                          onClick={e => signIn(e, navigate)}
                      >
                          Sign In
                      </button>
                      <h3>
                          Dont have an account? <span>Register</span>
                      </h3>
                  </form>
              </div>
          </div>
      </>
  )
};
