import React, { useState } from 'react'
import '../../css/loginPage.css'
import { useNavigate } from 'react-router-dom'
import checkToken from '../../actions/checkToken'
import { setSignIn } from '../../actions/inputs'
import userSignIn from '../../actions/userSignIn'
import Toasts from '../Toasts'

export default function LoginForm() {
    const navigate = useNavigate()
    const [loginFail, setLoginFail] = useState(false)
    const toasts = { loginFail, setLoginFail }
    const signIn = async (e, navigate) => {
        let data = setSignIn(e)
        await userSignIn(data.email, data.password)
        let token = checkToken()
        if (token) {
            navigate('/account_information', { state: { pass: true } })
        } else {
            setLoginFail(true)
        }
    }
    return (
        <div>
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
                <button id="submit-btn" onClick={e => signIn(e, navigate)}>
                    Sign In
                </button>
            </form>
            <Toasts toasts={toasts} />
        </div>
    )
}
