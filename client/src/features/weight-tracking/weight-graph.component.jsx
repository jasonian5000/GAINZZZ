import React from 'react'
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

export default function WeightGraph(props) {
    const weightRange = setWeightRange(props.savedWeights)
    return (
        <div className="weightTrackerContainer">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={730}
                    height={300}
                    data={props.savedWeights}
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
                    <Line type="monotone" dataKey="weight" stroke="red" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
