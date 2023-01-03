import React, { useState } from 'react'
import './styles/login-page.css'
import { useNavigate } from 'react-router-dom'
import supabase from '../ui/supabase'
import { useDispatch } from 'react-redux'

export default function LoginForm(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            props.toasts.setLoginFailToast(true)
            return
        }
        if (data) {
            console.log("login supabase", data.user)
            dispatch({ type: 'SET_USER', payload: data.user })
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