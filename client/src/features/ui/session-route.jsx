import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useSession } from '../users/sessionContext'

export default function SessionRoute() {
    const {session, getSession} = useSession()

    useEffect(() => {
        getSession()
        // eslint-disable-next-line
    }, [])
    if (session === undefined) {
        return null
    }
    return session ? <Outlet /> : <Navigate to="/login" />
    //
}
