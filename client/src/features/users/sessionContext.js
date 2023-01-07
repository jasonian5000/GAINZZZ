import { useContext, useState } from 'react'
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '../ui/supabase'

const SessionContext = createContext()
const SessionUpdateContext = createContext()

export function useSession() {
    return useContext(SessionContext)
}

export function useSessionUpdate() {
    return useContext(SessionUpdateContext)
}

export function SessionProvider({ children }) {
    const dispatch = useDispatch()
    const session = useSelector(state => state.user.session)
    const [validSession, setValidSession] = useState(session)

    const updateSession = async validSession => {
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

    return (
        <SessionContext.Provider value={validSession}>
            <SessionUpdateContext.Provider value={updateSession}>
                {children}
            </SessionUpdateContext.Provider>
        </SessionContext.Provider>
    )
}
