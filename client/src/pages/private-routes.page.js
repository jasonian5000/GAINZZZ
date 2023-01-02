import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../features/ui/supabase'
import { useDispatch } from 'react-redux'

const PrivateRoutes = () => {
    const dispatch = useDispatch()
    const [validSession, setValidSession] = useState(undefined)

    useEffect(() => {
        const updateSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            console.log(session)
            setValidSession(session)
            if (session) {
                dispatch({ type: 'SET_SESSION', payload: session })
                console.log('private supabase', session)
            }
        }
        updateSession()
        // eslint-disable-next-line
    }, [])
    if (validSession === undefined) {
        return null
    }
    return validSession ? <Outlet /> : <Navigate to="/login" />
    //
}

export default PrivateRoutes
