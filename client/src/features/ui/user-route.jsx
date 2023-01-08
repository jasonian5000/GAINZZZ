import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useSession } from 'features/users/sessionContext'

export default function UserRoute() {
    const { userData, getUserData } = useSession()

    useEffect(() => {
        getUserData()
        // eslint-disable-next-line
    }, [])
    if (userData === undefined) {
        return null
    }
    return userData ? <Outlet /> : <Navigate to="/get_started" />
}
