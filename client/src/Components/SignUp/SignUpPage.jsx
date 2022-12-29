import React, { useState } from 'react'
import supabase from '../../actions/supabaseClient'
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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        if (password.length < 6) {
            setNeedMoreToast(true)
            return
        }
        let { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error) {
            setNeedMoreToast(true)
            return
        }
        setConfirmEmailToast(true)
    }
    return (
        <>
            <div className="formContainer">
                <form className="signUpForm" onSubmit={handleSubmit}>
                    <h1>Join GAINZZZ Now! </h1>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter email address.."
                    />
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Must contain 6+ characters"
                    />
                    <button className="registerButton">Register</button>
                </form>
            </div>
            <Toasts toasts={toasts} />
        </>
    )
}

export default SignUpPage
