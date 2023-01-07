import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useSession, useSessionUpdate } from '../users/sessionContext'

export default function SessionRoute() {
    const validSession = useSession()
    const updateSession = useSessionUpdate()

    useEffect(() => {
        updateSession()
        // eslint-disable-next-line
    }, [])
    if (validSession === undefined) {
        return null
    }
    return validSession ? <Outlet /> : <Navigate to="/login" />
    //
}
