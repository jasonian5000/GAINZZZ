import React from 'react'
import '../../css/loginPage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/GAINZZZ.png'
import LoginForm from './LoginForm'

export const LoginPage = () => {
    return (
        <>
            <div className="login-Container">
                <div className="form-container">
                    <img src={logo} alt="logo" className="form-logo" />
                    <LoginForm />
                    <h3>
                        Dont have an account?
                        <span>
                            <Link to="/sign_up">Register</Link>
                        </span>
                    </h3>
                </div>
            </div>
        </>
    )
}
