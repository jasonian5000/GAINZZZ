import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWeightData, setWeightRange } from '../../actions/accountInformation'
import '../../css/accountInformation.css'
import IndividualAccountInfo from './IndividualAccountInfo'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Label,
    ResponsiveContainer,
} from 'recharts'
import UpdateAccountForm from './UpdateAccountForm'
import { useLocation } from 'react-router-dom'
import { Snackbar } from '@mui/material'

const AccountInformation = () => {
    const [pass, setPass] = useState(false)
    const [updated, setUpdated] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const weightData = useSelector(state => state.personalInfo.weightData)
    const weightRange = setWeightRange(weightData)
    useEffect(
        () => {
            setWeightData(dispatch)
            setWeightRange(weightData)
            setPass(location?.state?.pass)
        },
        // eslint-disable-next-line
        []
    )
    return (
        <div className="acctInfoPageWrapper">
            <div className="acctInfoPageContainer">
                <IndividualAccountInfo />
                <UpdateAccountForm setUpdated={setUpdated}/>
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
            <Snackbar
                sx={{
                    '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
                }}
                message="Login Successful! Welcome to Gainzzz!"
                open={pass}
                autoHideDuration={6000}
                onClose={() => {
                    setPass(false)
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <Snackbar
                sx={{
                    '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
                }}
                message="Account information was updated"
                open={updated}
                autoHideDuration={6000}
                onClose={() => {
                    setUpdated(false)
                    window.history.replaceState({}, document.title)
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </div>
    )
}

export default AccountInformation
