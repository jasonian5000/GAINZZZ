import React, { useState } from 'react'
import '../../css/loginPage.css'
import { useNavigate } from 'react-router-dom'
import supabase from '../../actions/supabaseClient'

export default function LoginForm(props) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            props.toasts.setLoginFailToast(true)
            return
        }
        if (data) {
            navigate('/account_information')
        }
    }
    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <h1>MEMBER SIGN IN</h1>
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
                placeholder="Enter password.."
            />
            <button>Sign In</button>
        </form>
    )
}
