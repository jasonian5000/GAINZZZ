import React, { useState } from 'react'
import validateSignUp from '../../actions/validateSignUp'
import '../../css/signUpForm.css'
import Toasts from '../Toasts'

const SignUpPage = () => {
    const [confirmEmailToast, setConfirmEmailToast] = useState(false)
    const [needMoreToast, setNeedMoreToast] = useState(false)
    const toasts = {
        confirmEmailToast,
        setConfirmEmailToast,
        needMoreToast,
        setNeedMoreToast,
    }
    return (
        <>
            <div className="formContainer">
                <form className="signUpForm">
                    <h1>Join GAINZZZ Now! </h1>
                    <input
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                    />
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Must contain 6+ characters"
                    />
                    <button
                        className="registerButton"
                        onClick={e => {
                            validateSignUp(e, setNeedMoreToast)
                            setConfirmEmailToast(true)
                        }}
                    >
                        Register
                    </button>
                </form>
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}

export default SignUpPage
