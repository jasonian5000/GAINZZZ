import React, { useState } from 'react'
import '../../css/loginPage.css'
import LoginForm from './LoginForm'
import Toasts from '../Toasts'

export const LoginPage = () => {
    const [loginFailToast, setLoginFailToast] = useState(false)
    const toasts = { loginFailToast, setLoginFailToast }
    return (
        <>
            <div className="loginPageWrapper">
                <div className="loginFormContainer">
                    <LoginForm toasts={toasts} />
                </div>
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}
