import React, { useState } from 'react'
import '../features/users/styles/form-page.css'
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
        <div className="pageContainer">
            <SignUpForm toasts={toasts} />
            <Toasts toasts={toasts} />
        </div>
    )
}

export default SignupPage
