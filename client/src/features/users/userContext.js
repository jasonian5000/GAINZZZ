import { useContext, useState } from 'react'
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '../ui/supabase'
import { SessionProvider } from './sessionContext'

const UserContext = createContext()
const UserUpdateContext = createContext()

export function useUser() {
    return useContext(UserContext)
}

export function useUserUpdate() {
    return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
    const dispatch = useDispatch()
    const session = useSelector(state => state.user.session)
    const user = useSelector(state => state.user.userData)
    const [validUser, setValidUser] = useState(user)

    const updateUser = async () => {
        if (!validUser) {
            const { data: userData, error } = await supabase
                .from('userData')
                .select('first_name, last_name, height, dob, trainer')
                .eq('user_id', session.user.id)
            if (error) {
                console.log('error supabase', error)
                setValidUser(false)
                return
            }
            if (
                !userData[0]?.first_name ||
                !userData[0]?.last_name ||
                !userData[0]?.height ||
                !userData[0]?.dob
            ) {
                console.log('failed', userData)
                setValidUser(false)
                return
            }
            console.log('valid user supabase', userData[0])
            dispatch({
                type: 'SET_USER_DATA',
                payload: userData[0],
            })
            setValidUser(true)
            return
        }
        console.log('valid user state', validUser)
    }

    return (
        <SessionProvider>
            <UserContext.Provider value={validUser}>
                <UserUpdateContext.Provider value={updateUser}>
                    {children}
                </UserUpdateContext.Provider>
            </UserContext.Provider>
        </SessionProvider>
    )
}
