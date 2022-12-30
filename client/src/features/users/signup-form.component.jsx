import React, { useState } from 'react'
import supabase from '../ui/supabase'
import './signup-form.css'

const SignUpForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        if (password.length < 6) {
            props.toasts.setNeedMoreToast(true)
            return
        }
        let { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error) {
            props.toasts.setNeedMoreToast(true)
            return
        }
        props.toasts.setConfirmEmailToast(true)
    }
    return (
        <>
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
        </>
    )
}

export default SignUpForm
