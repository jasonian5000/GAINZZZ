import React from 'react'
import { userSignUp } from '../actions/supabase';
import { captureUserSignUp } from '../actions/inputs';
import { useDispatch } from 'react-redux';

const SignUpPage = () => {
  const dispatch = useDispatch()
      const sendSignUp = async (e) => {
        console.log(e)
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
          window.alert('Please provide your first name');
        } else if (input.lastName.length < 2) {
          window.alert('Please provide your last name');
        } else if (!validateEmail(input.email)) {
          window.alert('Please provide a valid email address');
        } else if (input.password.length < 6) {
          window.alert(
            'Please make sure your password contains at least six characters'
          );
        } else {
          let userEntry = await userSignUp(
            input.firstName,
            input.lastName,
            input.username,
            input.email,
            input.password,
          );
          console.log(userEntry)
          window.alert(
            'Account created! Check your email to confirm and sign in.'
          );
          // set dispatch here
        }
      };
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
}

export default SignUpPage