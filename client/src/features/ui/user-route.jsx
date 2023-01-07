import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useUser, useUserUpdate } from '../users/userContext'

export default function UserRoute() {
    const validUser = useUser()
    const updateUser = useUserUpdate()
    useEffect(() => {
        updateUser()
        // eslint-disable-next-line
    }, [])
    if (validUser === undefined) {
        return null
    }
    return validUser ? <Outlet /> : <Navigate to="/get_started" />
}
