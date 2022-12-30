import React, { useState } from 'react'
import '../../css/loginPage.css'
import LoginForm from './LoginForm'
import Toasts from '../Toasts'

const LoginPage = (props) => {
    const [loginFailToast, setLoginFailToast] = useState(false)
    const toasts = { loginFailToast, setLoginFailToast }
    return (
        <>
            <div className="loginPageWrapper">
                <div className="loginFormContainer">
                    <LoginForm toasts={toasts} setLoggedIn={props.setLoggedIn} />
                </div>
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}

export default LoginPage