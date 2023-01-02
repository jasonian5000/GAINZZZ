import React, { useState } from 'react'
import '../features/users/styles/signup-page.css'
import Toasts from '../features/ui/toasts.component'
import SignUpForm from '../features/users/signup-form.component'

const SignupPage = () => {
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
                <SignUpForm toasts={toasts} />
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}

export default SignupPage
