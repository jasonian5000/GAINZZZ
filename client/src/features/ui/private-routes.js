import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from './supabase'
import { useDispatch } from 'react-redux'

const PrivateRoutes = () => {
    const dispatch = useDispatch()
    const [isUser, setIsUser] = useState(undefined)
    useEffect((isUser) => {
        const updateUser = async () => {
            if (isUser === undefined) {
                const {
                    data: { session },
                } = await supabase.auth.getSession()
                if (session) {
                    const { user } = session
                    setIsUser(user)
                    dispatch({ type: 'SET_USER', payload: user })
                    console.log("private supabase", user)
                }
            }
        }
        updateUser()
    }, [])
    if (isUser === undefined) {
        return null
    }
    return isUser ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes