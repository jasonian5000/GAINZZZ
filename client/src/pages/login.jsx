import React, { useState } from 'react'
import '../../css/loginPage.css'
import LoginForm from '../features/users/login-form.component'
import Toasts from '../features/ui/toasts.component'

const LoginPage = props => {
    const [loginFailToast, setLoginFailToast] = useState(false)
    const toasts = { loginFailToast, setLoginFailToast }
    return (
        <>
            <div className="loginPageWrapper">
                <div className="loginFormContainer">
                    <LoginForm
                        toasts={toasts}
                        setLoggedIn={props.setLoggedIn}
                    />
                </div>
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}

export default LoginPage
