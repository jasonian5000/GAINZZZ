import React, { useState } from 'react'
import '../../css/loginPage.css'
import { useNavigate } from 'react-router-dom'
import checkToken from '../../actions/checkToken'
import userSignIn from '../../actions/userSignIn'
import Toasts from '../Toasts'

export default function LoginForm() {
    const navigate = useNavigate()
    const [loginFailToast, setLoginFailToast] = useState(false)
    const toasts = { loginFailToast, setLoginFailToast }
    const signIn = async e => {
        e.preventDefault()
        await userSignIn(e.target.form[0].value, e.target.form[1].value)
        let token = checkToken()
        console.log("token", token)
        if (token) {
            navigate('/account_information', { state: { pass: true } })
        } else {
            setLoginFailToast(true)
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
                <button id="submit-btn" onClick={e => signIn(e)}>
                    Sign In
                </button>
            </form>
            <Toasts toasts={toasts} />
        </div>
    )
}
