import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setAcctInfo,
    getTrainers,
    sendAcctInfo,
    confirmDeleteAccount,
} from '../../actions/accountInformation'
import '../../css/accountInformation.css'
import IndividualAccountInfo from './IndividualAccountInfo'
import { useNavigate } from "react-router-dom"

const AccountInformation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const trainerDropDownList = useSelector(
        state => state.trainers.trainerDropDownList
    )
    const info = useSelector(state => state.personalInfo.accountInfo)
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
                                    placeholder="Enter your height in inches"
                                />
                            </div>
                            <div>
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="text"
                                    className="weight"
                                    placeholder="Enter your weight in pounds"
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
                                            <option
                                                key={trainer.id}
                                                value={trainer.id}
                                            >
                                                {trainer?.ptName}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <button onClick={e => sendAcctInfo(e, info)}>
                                Update
                            </button>
                            <button onClick={() => confirmDeleteAccount(navigate)}> Delete Account</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <h1>Account Information</h1>
                <div>
                    {info?.map((info, index) => {
                        return <IndividualAccountInfo key={index} info={info} />
                    })}
                </div>
            </div>
        </>
    )
}

export default AccountInformation
