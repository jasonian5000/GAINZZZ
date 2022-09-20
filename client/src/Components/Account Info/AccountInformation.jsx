import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setAcctInfo,
    getTrainers,
    sendAcctInfo,
    confirmDeleteAccount,
    setWeightData,
} from '../../actions/accountInformation'
import '../../css/accountInformation.css'
import IndividualAccountInfo from './IndividualAccountInfo'
import { useNavigate } from 'react-router-dom'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const AccountInformation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const trainerDropDownList = useSelector(
        state => state.trainers.trainerDropDownList
    )
    const weightData = useSelector(state => state.personalInfo.weightData)
    const info = useSelector(state => state.personalInfo.accountInfo)
    const [value, setValue] = useState(1)
    useEffect(
        () => {
            getTrainers(dispatch)
            setAcctInfo(dispatch)
            setWeightData(dispatch)
        },
        // eslint-disable-next-line
        []
    )
    console.log(weightData)
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
                                        onChange={e => {
                                            setValue(e.target.value)
                                        }}
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
                            <button
                                onClick={() => confirmDeleteAccount(navigate)}
                            >
                                {' '}
                                Delete Account
                            </button>
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
            <div>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <AreaChart
                        width={730}
                        height={250}
                        data={weightData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorWeight"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#8884d8"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#8884d8"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            {/* <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient> */}
                        </defs>
                        <XAxis dataKey="created_at" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="weight"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorWeight)"
                        />
                        {/* <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    /> */}
                    </AreaChart>
                {/* </ResponsiveContainer> */}
            </div>
        </>
    )
}

export default AccountInformation
