import React from "react";
import sendSignUp from "../../actions/signUp";
import "../../css/signUpForm.css"
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import logo from '../../assets/GAINZZZ.png'

const SignUpPage = () => {
  return (
      <>
          <form className="signUpForm">
              <div className="form-container">
                  <div className="firstNameContainer">
                      <label className="" htmlFor="firstName">
                          First name
                      </label>
                      <input
                          name="firstName"
                          type="text"
                          placeholder="Enter your first name"
                      />
                  </div>
                  <div className="lastNameContainer">
                      <label htmlFor="lastName">Last name</label>
                      <input
                          name="lastName"
                          type="text"
                          placeholder="Enter your last name"
                      />
                  </div>
                  <div className="usernameContainer">
                      <label htmlFor="username" required>
                          username
                      </label>
                      <input
                          name="username"
                          type="text"
                          placeholder="username"
                      />
                  </div>
                  <div className="emailContainer">
                      <label>Email address</label>
                      <input name="email" type="email" placeholder="email" />
                  </div>
                  <div className="passwordContainer">
                      <label htmlFor="password">Password</label>
                      <input
                          name="password"
                          type="password"
                          placeholder="Must contain 6+ characters"
                      />
                      <div className="buttonContainer">
                        <button onClick={e => sendSignUp(e)}>Register</button>
                      </div>
                  </div>
                  <div className="iconList">
                  <li>
                      <FacebookIcon id="icon" />
                  </li>
                  <li>
                      <InstagramIcon id="icon" />
                  </li>
                  <li>
                      <TwitterIcon id="icon" />
                  </li>
                  </div>
              </div>
          </form>
      </>
  )
};

export default SignUpPage;
