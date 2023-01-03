import React, { useState } from 'react'
import supabase from '../ui/supabase'
import './styles/signup-page.css'

const SignUpForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        if (password.length < 6 || password !== check) {
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
                    placeholder="Password must contain 6+ characters"
                />
                <input
                    type="password"
                    name="check"
                    value={check}
                    onChange={e => setCheck(e.target.value)}
                    placeholder="Re-enter password"
                />
                <button className="registerButton">Register</button>
            </form>
        </>
    )
}

export default SignUpForm
