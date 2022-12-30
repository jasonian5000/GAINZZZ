import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/accountInformation.css'
import IndividualAccountInfo from '../features/users/account-info.component'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Label,
    ResponsiveContainer,
} from 'recharts'
import UpdateAccountForm from '../features/users/update-account.component'
import { useLocation } from 'react-router-dom'
import Toasts from '../features/ui/toasts.component'
import { motion } from 'framer-motion'
import getWeightData from '../features/tracking/get-weight-data'
import setWeightRange from '../actions/setWeightRange'

const AccountInformation = () => {
    const [pass, setPass] = useState(false)
    const [updated, setUpdated] = useState(false)
    const toasts = { pass, setPass, updated, setUpdated }
    const location = useLocation()
    const dispatch = useDispatch()
    const weightData = useSelector(state => state.acctInfo.weightData)
    const weightRange = setWeightRange(weightData)
    useEffect(() => {
        getWeightData(dispatch)
        setWeightRange(weightData)
        setPass(location?.state?.pass)
        // eslint-disable-next-line
    }, [])

    return (
        <motion.div
            className="acctInfoPageWrapper"
            intial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <div className="acctInfoPageContainer">
                <IndividualAccountInfo />
                <UpdateAccountForm setUpdated={setUpdated} />
            </div>
            <div className="weightTrackerWrapper">
                <h1>Weight Tracker</h1>
                <div className="weightTrackerContainer">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={730}
                            height={300}
                            data={weightData}
                            margin={{ top: 0, right: 0, left: 50, bottom: 0 }}
                        >
                            <XAxis dataKey="created_at" stroke="#f5f5f5" />
                            <YAxis
                                domain={[weightRange?.low, weightRange?.high]}
                                stroke="#f5f5f5"
                            >
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
            <Toasts toasts={toasts} />
        </motion.div>
    )
}

export default AccountInformation
