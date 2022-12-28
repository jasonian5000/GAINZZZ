import React from 'react'
import '../../css/loginPage.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import logo from '../../assets/GAINZZZ.png'
import LoginForm from './LoginForm'

export const LoginPage = () => {
    return (
        <>
            <div className="login-Container">
                <div className="form-container">
                    <LoginForm />
                    <h3>
                        Dont have an account?
                        <span>
                            <Link to="/sign_up">Register</Link>
                        </span>
                    </h3>
                    <h1>OR</h1>
                    <ul className="iconList">
                        <li>
                            <FacebookIcon id="icon" />
                        </li>
                        <li>
                            <InstagramIcon id="icon" />
                        </li>
                        <li>
                            <TwitterIcon id="icon" />
                        </li>
                    </ul>
                    <p className="bottom-form">
                        Terms of Service |
                        <img src={logo} alt="logo" className="form-logo" />
                    </p>
                </div>
            </div>
        </>
    )
}
