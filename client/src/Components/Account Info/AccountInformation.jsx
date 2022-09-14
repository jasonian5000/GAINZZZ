import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setAcctInfo,
    getTrainers,
    sendAcctInfo
} from '../../actions/accountInformation'
import '../../css/accountInformation.css'

const AccountInformation = () => {
    const dispatch = useDispatch()
    const trainerDropDownList = useSelector(
        state => state.trainers.trainerDropDownList
    )
    const info = useSelector(state => state.personalInfo.accountInfo)
    console.log(info)
    const [value, setValue] = useState(1)
    const handleChange = e => {
        setValue(e.target.value)
    }
    useEffect(
        () => {
            getTrainers(dispatch)
            setAcctInfo(dispatch)
        },
        // eslint-disable-next-line
        []
    )
    return (
        <>
            <div className="accountInformationContainer">
                <div className="accountInformationForm">
                    <h1 className="title">
                        Please enter your personal information
                    </h1>
                    <div>
                        <form>
                            <div>
                                <label htmlFor="height">Height</label>
                                <input
                                    type="text"
                                    className="height"
                                    placeholder="Enter your height"
                                />
                            </div>
                            <div>
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="text"
                                    className="weight"
                                    placeholder="Enter your weight"
                                />
                            </div>
                            <div>
                                <label htmlFor="gender">Gender</label>
                                <input
                                    type="text"
                                    className="gender"
                                    placeholder="Enter your gender"
                                />
                            </div>
                            <div>
                                <label htmlFor="age">Age</label>
                                <input
                                    type="text"
                                    className="age"
                                    placeholder="Enter your age"
                                />
                            </div>
                            <div>
                                <label htmlFor="personalTrainer">
                                    select personal trainer
                                    <select
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <option value="">No trainer</option>
                                        {trainerDropDownList.map(trainer => (
                                            <>
                                                <option
                                                    key={trainer.id}
                                                    value={trainer.id}
                                                >
                                                    {trainer?.ptName}
                                                </option>
                                            </>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <button onClick={(e) => sendAcctInfo(e, info)}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <h1>Personal Information</h1>
                <div>
                    {/* map through the useSelector */}
                    <p
                        style={{
                            display: info.height ? 'block' : 'none',
                        }}
                    >
                        Height: {info?.height}
                    </p>
                    <p
                        style={{
                            display: info.weight ? 'block' : 'none',
                        }}
                    >
                        Weight: {info?.weight} pounds
                    </p>
                    <p
                        style={{
                            display: info.gender ? 'block' : 'none',
                        }}
                    >
                        Gender: {info?.gender}
                    </p>
                    <p
                        style={{
                            display: info.age ? 'block' : 'none',
                        }}
                    >
                        Age: {info?.age} years old
                    </p>
                    <p
                        style={{
                            display: info.personalTrainer ? 'block' : 'none',
                        }}
                    >
                        Personal Trainer: {info?.ptTable?.ptName}
                    </p>
                </div>
            </div>
        </>
    )
}

export default AccountInformation
