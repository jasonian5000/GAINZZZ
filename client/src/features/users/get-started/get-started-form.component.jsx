import React, { useState } from 'react'

export default function GetStartedForm() {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [dob, setDob] = useState('')

    const handleSubmit = async e => {

    }
    return (
        <div>
            <h1>Get Started</h1>
            <form className="getStartedForm" onSubmit={handleSubmit}>
                <input
                    name="first"
                    type="text"
                    value={first}
                    onChange={e => setFirst(e.target.value)}
                />
                <input
                    name="last"
                    type="text"
                    value={last}
                    onChange={e => setLast(e.target.value)}
                />
                <input
                    name="height"
                    type="text"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                />
                <input
                    name="weight"
                    type="text"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
                <input
                    name="dob"
                    type="date"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
            </form>
        </div>
    )
}
