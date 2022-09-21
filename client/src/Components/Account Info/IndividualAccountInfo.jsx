import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bmiCalc, setAcctInfo } from '../../actions/accountInformation'
import '../../css/accountInformation.css'

const IndividualAccountInfo = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.personalInfo.accountInfo)
    const [update, setUpdate] = useState(info[0])
    const bmi = bmiCalc(update?.height, update?.weight)
    useEffect(
        () => {
            setAcctInfo(dispatch)
        },
        // eslint-disable-next-line
        []
    )

    useEffect(() => {
        setUpdate(info[0])
    }, [info])
    return (
        <div className="idividualAccountInfoContainer">
            <h1>Account Information</h1>
            <p
                style={{
                    display: update?.height ? 'block' : 'none',
                }}
            >
                Height: {update?.height} inches
            </p>
            <p
                style={{
                    display: update?.weight ? 'block' : 'none',
                }}
            >
                Weight: {update?.weight} pounds
            </p>
            <p
                style={{
                    display: bmi > 0 ? 'block' : 'none',
                }}
            >
                BMI: {bmi}
            </p>
            <p
                style={{
                    display: update?.gender ? 'block' : 'none',
                }}
            >
                Gender: {update?.gender}
            </p>
            <p
                style={{
                    display: update?.age ? 'block' : 'none',
                }}
            >
                Age: {update?.age} years old
            </p>
            <p
                style={{
                    display: update?.ptTable?.ptName ? 'block' : 'none',
                }}
            >
                Personal Trainer: {update?.ptTable?.ptName}
            </p>
        </div>
    )
}

export default IndividualAccountInfo
