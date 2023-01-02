import Toasts from 'features/ui/toasts.component'
import React, { useState } from 'react'
import './weight-tracking.css'
import { useSelector } from 'react-redux'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Label,
    ResponsiveContainer,
} from 'recharts'
import setWeightRange from './set-weight-range'

export default function WeightTracking() {
    const [pass, setPass] = useState(false)
    const [updated, setUpdated] = useState(false)
    const toasts = { pass, setPass, updated, setUpdated }
    const weightData = useSelector(state => state.acctInfo.weightData)
    const weightRange = setWeightRange(weightData)
    return (
        <div>
            <div className="weightTrackerWrapper">
                <div>
                    <form action="">
                        <h1>Update weight</h1>
                        <input type="text" />
                    </form>
                </div>
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
        </div>
    )
}
