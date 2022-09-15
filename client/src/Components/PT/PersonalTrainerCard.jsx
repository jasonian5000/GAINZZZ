import React from 'react'
import { Card } from '@mui/material'

const PersonalTrainerCard = (props) => {
return (
        <div className="cardContainer">
            <Card>
                <h1>{props?.trainer?.ptName}</h1>
                <p>{props?.trainer?.description}</p>
                <p>Specializations in {props?.trainer?.specialties}</p>
                <p>Rates: {props?.trainer?.rates}</p>
                <p>Client Reviews: </p>
                <p>{props?.trainer?.testimonials}</p>
            </Card>
        </div>
)
}

export default PersonalTrainerCard