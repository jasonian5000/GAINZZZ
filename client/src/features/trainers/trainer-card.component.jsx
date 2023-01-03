import React from 'react'
import { Card } from '@mui/material'
import './trainer-card.css'
import { useState } from 'react'
import PersonalCardInfo from './trainer-info.component'

const PersonalTrainerCard = props => {
    const [visibleDetails, setVisibleDetails] = useState(false)
    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
    }
    return (
        <div className="personalTrainerCardContainer">
            <Card
                sx={{
                    display: 'flex',
                    width: '920px',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    boxShadow: 3,
                    bgcolor: 'text.primary',
                }}
                variant="outlined"
                className="card"
            >
                <div className="topCard" style={{}}>
                    <div className="left-side-topCard">
                        <img
                            className="trainerImg"
                            src={props?.trainer?.img}
                            alt="personal trainer"
                        />
                    </div>
                    <div className="right-side-topCard">
                        <h1 className="trainerName">
                            {props?.trainer?.ptName}
                        </h1>
                        <div className="preCardInfo">
                            <p>Specializes in {props?.trainer?.specialties}</p>
                            <p>Trainer Rates: {props?.trainer?.rates}</p>
                            <br />
                            <br />
                            <p className="clickReviews" onClick={handleClick}>
                                Click to see Bio & Contact
                            </p>
                        </div>
                    </div>
                </div>
                {visibleDetails ? <PersonalCardInfo props={props} /> : ''}
            </Card>
        </div>
    )
}

export default PersonalTrainerCard
