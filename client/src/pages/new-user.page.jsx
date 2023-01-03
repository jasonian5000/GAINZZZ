import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../features/ui/supabase'
import { useDispatch, useSelector } from 'react-redux'

export default function NewUser() {
    const dispatch = useDispatch()
    const session = useSelector(state => state.user.session)
    const [validUser, setValidUser] = useState(undefined)

    useEffect(() => {
        const updateUser = async session => {
            // const {
            //     data: user_data ,
            //     error,
            // } = await supabase
            //     .from('user_data')
            //     .select("first_name", "last_name", "height", "dob", "trainer")
            //     .eq('user_id', session.user.id)
            // if (error) {
            //     console.log("error supabase",error);
            //     setValidUser(false)
            //     return
            // }
            // if (user_data.length > 0) {
            //     console.log("valid user supabase", user_data[0])
            //     dispatch({ type: 'SET_USER_DATA', payload: user_data[0] })
            //     setValidUser(true)
            //     return
            // }
            // console.log("no user supabase", user_data)
            // if (
            //     !user_data.first_name ||
            //     !user_data.last_name ||
            //     !user_data.height ||
            //     !user_data.dob
            // ) {
                console.log(session)
                setValidUser(false)
            // }
        }
        updateUser(session)
        // eslint-disable-next-line
    }, [])
    if (validUser === undefined) {
        return null
    }
    return validUser ? <Outlet /> : <Navigate to="/get_started" />
}
