import React, { useState } from 'react'
import '../../css/signUpForm.css'
import Toasts from '../features/ui/toasts.component'
import SignUpForm from '../features/users/signup-form.component'

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
                <SignUpForm toasts={toasts} />
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}

export default SignUpPage
