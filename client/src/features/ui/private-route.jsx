import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from './supabase'
import { useDispatch, useSelector } from 'react-redux'

const PrivateRoutes = () => {
    const dispatch = useDispatch()
    const session = useSelector(state => state.user.session)
    const [validSession, setValidSession] = useState(session)

    useEffect(() => {
        const updateSession = async (validSession) => {
            if (!validSession) {
                const {
                    data: { session },
                } = await supabase.auth.getSession()
                setValidSession(session)
                if (session) {
                    dispatch({ type: 'SET_SESSION', payload: session })
                    console.log('valid session supabase', session)
                    return
                }
            }
            console.log('valid session state', validSession)
        }
        console.log("private useEffect")
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
