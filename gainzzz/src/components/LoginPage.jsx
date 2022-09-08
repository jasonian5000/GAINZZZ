import React from 'react';
import styled from 'styled-components';
import "../css/loginPage.css"

export const LoginPage = () => {
  return (
    <LoginRoot>
      <Workoutlady>
        <Text1>GAINZZ</Text1>
        <Text2>Log In</Text2>
        <Emailusername>
            <input className="emailLoginInput"placeholder="Email" type="email"></input>
        </Emailusername>
        <Password1>
          <input className="passwordLoginInput"placeholder="Password" type="password"></input>
        </Password1>
        <Text5>Forgot Password?</Text5>
        <LogIn>
          <button className="loginButton">Log In</button>
        </LogIn>
        <Text7>
          Dont have an account? <button className='signUpButton'>Sign Up</button>
        </Text7>
      </Workoutlady>
    </LoginRoot>
  );
};
const LoginRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
`;
const Workoutlady = styled.div`
  height: 770px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 23px 13px 19px 17px;
  background-size: cover;
  background-image: url('https://file.rendit.io/n/nTv4mwmS1sGjJWPurLye.png');
`;
const Text1 = styled.div`
  width: 188px;
  height: 55px;
  align-self: center;
  margin: 0px 0px 36px 0px;
  color: #c03131;
  font-size: 48px;
  font-family: Inter;
`;
const Text2 = styled.div`
  width: 86px;
  height: 32px;
  margin: 0px 0px 11px 14px;
  color: #ffffff;
  font-size: 24px;
  font-family: Inter;
`;
const Emailusername = styled.div`
  width: 305px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  margin: 0px 0px 7px 0px;
  padding: 25px 20px 34px 20px;
  background-size: cover;
  background-image: url('https://file.rendit.io/n/N7yeFBmZ1IBYmgavcC80.svg');
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Password1 = styled.div`
  width: 305px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  margin: 0px 0px 3px 0px;
  padding: 25px 20px 30px 20px;
  background-size: cover;
  background-image: url('https://file.rendit.io/n/n6zs7xy3jJV49rIf4sr9.svg');
`;
const Text4 = styled.div`
  width: 74px;
  height: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-family: Inter;
`;
const Text5 = styled.div`
  width: 177px;
  height: 34px;
  margin: 0px 0px 294px 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
`;
const LogIn = styled.div`
  width: 297px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 33px 20px;
  padding: 17px 0px 25px 0px;
  background-size: cover;
  background-image: url('https://file.rendit.io/n/6enQPbX9LxYMBWz8Zx9k.svg');
`;
const loginButton = styled.div`
  width: 73px;
  height: 36px;
  color: #ffffff;
  font-size: 24px;
  font-family: Inter;
`;
const Text7 = styled.div`
  height: 32px;
  margin: 0px 0px 0px 15px;
  font-size: 20px;
  font-family: Inter;
  white-space: pre-wrap;
`;
const signUpButton = styled.div`
  display: contents;
  color: #c03131;
  font-size: 20px;
  font-family: Inter;
`;
