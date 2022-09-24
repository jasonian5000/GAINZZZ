import React from 'react'
import { Card } from '@mui/material'
import '../../css/PersonalTrainerCard.css'
import { useState } from 'react'
import PersonalCardInfo from './PersonalCardInfo'

const PersonalTrainerCard = props => {
    const [visibleDetails, setVisibleDetails] = useState(false)
    const handleClick = () => {
        console.log('clicked the image')
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
                            <p>{props?.trainer?.description}</p>
                            <br />
                            <p className="clickReviews" onClick={handleClick}>
                                Client Reviews
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
