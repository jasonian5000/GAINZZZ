import React from 'react'
import { Card } from '@mui/material'
import "../../css/PersonalTrainerCard.css"

const PersonalTrainerCard = (props) => {
    console.log("this is props", props)
return (
    <div className="cardContainer">
        <Card
            sx={{ borderRadius: '16px', boxShadow: 3, bgcolor: 'text.primary' }}
            variant="outlined"
            className="card"
        >
            <div className="content">
                <h1>{props?.trainer?.ptName}</h1>
                <p>{props?.trainer?.description}</p>
                <p>Specializations in {props?.trainer?.specialties}</p>
                <p>Rates: {props?.trainer?.rates}</p>
                <p>Client Reviews: </p>
                <p>{props?.trainer?.testimonials}</p>
                <p>{props?.trainer?.test2}</p>
                <p>{props?.trainer?.test3}</p>
                <img src={props?.trainer?.img} alt="" /> 
                {/* Need to figure out why the above isnt working */}
            </div>
        </Card>
    </div>
)
}

export default PersonalTrainerCard