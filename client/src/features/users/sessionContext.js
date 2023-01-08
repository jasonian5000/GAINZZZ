import { useContext, useState, createContext } from 'react'
import supabase from '../ui/supabase'

const SessionContext = createContext(null)

export function SessionProvider({ children }) {
    const [session, setSession] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const [userData, setUserData] = useState(undefined)

    const getSession = async () => {
        if (!session) {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            setSession(session)
            setUser(session.user)
            return
        }
    }

    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        return { data, error }
    }

    const logout = async () => {
        await supabase.auth.signOut()
    }

    const getUserData = async () => {
        if (user && !userData) {
            const { data: userData, error } = await supabase
                .from('userData')
                .select('first_name, last_name, height, dob, trainer')
                .eq('user_id', user.id)
            if (error) {
                console.log('get user data error', error)
                setUserData(undefined)
                return
            }
            if (
                !userData[0]?.first_name ||
                !userData[0]?.last_name ||
                !userData[0]?.height ||
                !userData[0]?.dob
            ) {
                setUserData(false)
                return
            }
            setUserData(userData[0])
            return
        }
    }

    return (
        <SessionContext.Provider
            value={{
                session,
                setSession,
                getSession,
                user,
                setUser,
                userData,
                setUserData,
                login,
                logout,
                getUserData,
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export const useSession = () => useContext(SessionContext)
