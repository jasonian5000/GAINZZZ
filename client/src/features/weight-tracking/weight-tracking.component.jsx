import Toasts from 'features/ui/toasts.component'
import React, { useState } from 'react'
import './weight-tracking.css'
import WeightGraph from './weight-graph.component'

export default function WeightTracking() {
    const [pass, setPass] = useState(false)
    const [updated, setUpdated] = useState(false)
    const toasts = { pass, setPass, updated, setUpdated }
    const [savedWeights, setSavedWeights] = useState(1)

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
                <WeightGraph savedWeights={savedWeights}/>
            </div>
            <Toasts toasts={toasts} />
        </div>
    )
}
