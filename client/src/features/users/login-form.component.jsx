import React, { useState } from 'react'
import './styles/login-page.css'
import { useNavigate } from 'react-router-dom'
import { useSession } from './sessionContext'

export default function LoginForm(props) {
    const {login, setUser, setSession} = useSession()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        const { data, error } = await login(email, password)
        if (error) {
            console.log("login error", error)
            props.toasts.setLoginFailToast(true)
            return
        }
        if (data) {
            setSession(true)
            setUser(data)
            console.log("login supabase", data.user)
            navigate('/')
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