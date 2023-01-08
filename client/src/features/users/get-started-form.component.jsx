import React, { useState } from 'react'
import './styles/form-page.css'
import supabase from 'features/ui/supabase'
import { useNavigate } from 'react-router-dom'
import { useSession } from './sessionContext'

export default function GetStartedForm() {
    const navigate = useNavigate()
    const { user, setUserData } = useSession()
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [height, setHeight] = useState('')
    // const [weight, setWeight] = useState('')
    const [dob, setDob] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const { data, error } = await supabase
            .from('userData')
            .insert({
                user_id: user.id,
                first_name: first,
                last_name: last,
                height: height,
                dob: dob,
                created_at: new Date(),
                updated_at: new Date(),
            })
            .select()
        if (error) {
            console.log("add user data error", error)
            return
        }
        setUserData(data[0])
        navigate('/')
    }
    return (
        <div className="formContainer">
            <h1>Get Started</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    name="first"
                    type="text"
                    value={first}
                    placeholder="First name"
                    onChange={e => setFirst(e.target.value)}
                />
                <input
                    name="last"
                    type="text"
                    value={last}
                    placeholder="Last name"
                    onChange={e => setLast(e.target.value)}
                />
                <input
                    name="height"
                    type="text"
                    value={height}
                    placeholder="Height"
                    onChange={e => setHeight(e.target.value)}
                />
                {/* <input
                    name="weight"
                    type="text"
                    value={weight}
                    placeholder="Weight"
                    onChange={e => setWeight(e.target.value)}
                /> */}
                <input
                    name="dob"
                    type="date"
                    value={dob}
                    placeholder="Date of Birth"
                    onChange={e => setDob(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
