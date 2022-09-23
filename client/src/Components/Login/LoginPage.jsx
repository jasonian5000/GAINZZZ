import React from "react";
import "../../css/loginPage.css";
import { userSignIn } from "../../actions/supabase_client";
import { setSignIn } from "../../actions/inputs";
import { checkToken } from "../../actions/checkToken";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import logo from '../../assets/GAINZZZ.png'

export const LoginPage = () => {
  const navigate = useNavigate()
  const signIn = async (e, navigate) => {
    let data =  setSignIn(e);
    await userSignIn(data.email, data.password);
    let token = checkToken();
    if (token) {
      navigate("/", { state: {pass: true}})
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
                          <a href="www.google.com">Forget Password?</a>
                      </div>
                      <button
                          id="submit-btn"
                          onClick={e => signIn(e, navigate)}
                      >
                          Sign In
                      </button>
                      <h3>
                          Dont have an account?{' '}
                          <span>
                              {' '}
                              <Link to="/sign_up">Register</Link>{' '}
                          </span>
                      </h3>
                      <h1>OR</h1>
                      <ul className="iconList">
                          <li>
                              <FacebookIcon id="icon" />
                          </li>
                          <li>
                              <InstagramIcon id="icon" />
                          </li>
                          <li>
                              <TwitterIcon id="icon" />
                          </li>
                      </ul>
                      <p className="bottom-form">
                          Terms of Service |{' '}
                          <img src={logo} alt="logo" className="form-logo" />
                      </p>
                  </form>
              </div>
          </div>
      </>
  )
};
