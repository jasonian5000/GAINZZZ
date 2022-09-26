import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bmiCalc, setAcctInfo } from '../../actions/accountInformation'
import { setCount } from '../../actions/countAction'
import { fetchWorkoutsCompleted } from '../../actions/supabase_client'
import '../../css/accountInformation.css'

const IndividualAccountInfo = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.personalInfo.accountInfo)
    const count = useSelector(state=> state.count.workoutCount )
    const [currentInfo, setCurrentInfo] = useState(info[0])
    const bmi = bmiCalc(currentInfo?.height, currentInfo?.weight)
    const inchesToFeet = value => {
        value = Number(value)
        let feet = Math.floor(value / 12)
        let inches = value % 12
        return `${feet}' ${inches}"`
    }
    useEffect(() => {
        setAcctInfo(dispatch)
        setCount(dispatch)
    }, [])

    useEffect(() => {
        setCurrentInfo(info[0])
    }, [info])
    return (
        <div className="acctInfoContainer">
            <h1>Account Information</h1>
            {currentInfo?.height ? (
            <div className="infoDisplay">
                    <p>Height: </p>
                    <p>{inchesToFeet(currentInfo?.height)}</p>
                </div>
                ) : (
                <div className="infoDisplay"><p>Height: </p><p> needs update</p></div>
                )}
            {currentInfo?.weight ? (
                <div className="infoDisplay">
                    <p>Weight: </p>
                    <p>{currentInfo?.weight} pounds</p>
                </div>
            ) : (
                <div className="infoDisplay">
                    <p>Weight: </p>
                    <p> needs update</p>
                </div>
            )}
            {bmi > 0 ? (
                <div className="infoDisplay">
                    <p>BMI: </p>
                    <p>{bmi}</p>
                </div>
            ) : (
                <div className="infoDisplay">
                    <p>BMI: </p>
                    <p> needs update</p>
                </div>
            )}
            {currentInfo?.age ? (
                <div className="infoDisplay">
                    <p>Age: </p>
                    <p>{currentInfo?.age} years old</p>
                </div>
            ) : (
                <div className="infoDisplay">
                    <p>Age: </p>
                    <p> needs update</p>
                </div>
            )}
            {currentInfo?.gender ? (
                <div className="infoDisplay">
                    <p>Gender: </p>
                    <p>{currentInfo?.gender}</p>
                </div>
            ) : (
                <div className="infoDisplay">
                    <p>Gender: </p>
                    <p> needs update</p>
                </div>
            )}
            {currentInfo?.ptTable?.ptName ? (
                <div className="infoDisplay">
                    <p>Personal Trainer: </p>
                    <p>{currentInfo?.ptTable?.ptName}</p>
                </div>
            ) : (
                <div className="infoDisplay">
                    <p>Personal Trainer: </p>
                    <p> needs update</p>
                </div>
            )}
            {count[0]?.workoutsCompleted ? (
                <div className="infoDisplay">
                    <p>Workouts Completed: </p>
                    <p>{count[0]?.workoutsCompleted}</p>
                </div>
            ) : (
                <div className="infoDisplay">
                    <p>Workout Completed: </p>
                    <p> 0</p>
                </div>
            )}
        </div>
    )
}

export default IndividualAccountInfo
