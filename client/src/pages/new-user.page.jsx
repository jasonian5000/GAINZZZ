import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../features/ui/supabase'
import { useDispatch, useSelector } from 'react-redux'

export default function NewUser() {
    const dispatch = useDispatch()
    const session = useSelector(state => state.user.session)
    const [validUser, setValidUser] = useState(undefined)

    useEffect(() => {
        console.log('user session state', session)
        const updateUser = async () => {
            const {
                data: { users },
                error,
            } = await supabase
                .from('users')
                .select(
                    'email, first_name, last_name, dob, height, personal_trainer'
                )
                .eq('user_id', session.user.id)
            if (error) {
                console.log(error)
                return
            }
            if (await users) {
                console.log('users', users)
                dispatch({ type: 'SET_USER_DATA', payload: users })
                setValidUser(true)
                return
            }
            console.log('users supabase', users)
            setValidUser(false)
        }
        updateUser()
        // eslint-disable-next-line
    }, [])
    if (validUser === undefined) {
        return null
    }
    return validUser ? <Outlet /> : <Navigate to="/get_started" />
}
