import React from "react";
import sendSignUp from "../../actions/signUp";

const SignUpPage = () => {
  return (
    <>
      <form>
        <div>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="username" required>
            username
          </label>
          <input name="username" type="text" placeholder="username" />
        </div>
        <div>
          <label>Email address</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Must contain 6+ characters"
          />
          <button onClick={(e) => sendSignUp(e)}>Register</button>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
