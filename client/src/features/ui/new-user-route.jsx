import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from './supabase'
import { useDispatch, useSelector } from 'react-redux'

export default function NewUser() {
    const dispatch = useDispatch()
    const session = useSelector(state => state.user.session)
    const user = useSelector(state => state.user.userData)
    const [validUser, setValidUser] = useState(user)

    useEffect(() => {
        const updateUser = async session => {
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
        updateUser(session)
        // eslint-disable-next-line
    }, [])
    if (validUser === undefined) {
        return null
    }
    return validUser ? <Outlet /> : <Navigate to="/get_started" />
}
