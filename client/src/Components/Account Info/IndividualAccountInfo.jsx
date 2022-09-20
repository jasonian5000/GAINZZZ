import React from 'react'
import { bmiCalc } from '../../actions/accountInformation'

const IndividualAccountInfo = props => {
    const bmi = bmiCalc(props.info.height, props.info.weight)
    return (
        <div>
            <p
                style={{
                    display: props?.info?.height ? 'block' : 'none',
                }}
            >
                Height: {props?.info?.height} inches
            </p>
            <p
                style={{
                    display: props?.info?.weight ? 'block' : 'none',
                }}
            >
                Weight: {props?.info?.weight} pounds
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
                    display: props?.info?.gender ? 'block' : 'none',
                }}
            >
                Gender: {props?.info?.gender}
            </p>
            <p
                style={{
                    display: props?.info?.age ? 'block' : 'none',
                }}
            >
                Age: {props?.info?.age} years old
            </p>
            <p
                style={{
                    display: props?.info?.ptTable?.ptName ? 'block' : 'none',
                }}
            >
                Personal Trainer: {props?.info?.ptTable?.ptName}
            </p>
        </div>
    )
}

export default IndividualAccountInfo
