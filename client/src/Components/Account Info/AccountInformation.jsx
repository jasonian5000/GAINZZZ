import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setWeightData,
} from '../../actions/accountInformation'
import '../../css/accountInformation.css'
import IndividualAccountInfo from './IndividualAccountInfo'
import { LineChart, Line, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from 'recharts'
import UpdateAccountForm from './UpdateAccountForm'

const AccountInformation = () => {
    const dispatch = useDispatch()
    const weightData = useSelector(state => state.personalInfo.weightData)
    useEffect(
        () => {
            setWeightData(dispatch)
        },
        // eslint-disable-next-line
        []
    )
    return (
        <div className="acctInfoPageWrapper">
            <div className="acctInfoPageContainer">
                <IndividualAccountInfo />
                <UpdateAccountForm />
            </div>
            <div className="weightTrackerWrapper">
                <h1>Weight Tracker</h1>
                <div className='weightTrackerContainer'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={730}
                            height={300}
                            data={weightData}
                            margin={{ top: 0, right: 0, left: 50, bottom: 0 }}
                        >
                            <XAxis dataKey="created_at" stroke="#f5f5f5" />
                            <YAxis domain={[200, 300]} stroke="#f5f5f5">
                                <Label
                                    value="pounds"
                                    stroke="#f5f5f5"
                                    position="left"
                                    angle={270}
                                />
                            </YAxis>
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="weight"
                                stroke="red"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default AccountInformation
