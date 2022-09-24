import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../../css/exerciseCard.css'
import FavoriteButton from './FavoriteButton'

const ExerciseCard = props => {
    return (
        <div className="cardContainer">
            {props.current?.map((exercise, index) => (
                <div key={exercise.id + index} className="exerciseCard">
                    <img
                        src={exercise.gifUrl}
                        alt={exercise.name}
                        loading="lazy"
                    />
                    <Typography
                        ml="21px"
                        color="black"
                        fontWeight="bold"
                        mt="11px"
                        pb="10px"
                        textTransform="capitalize"
                    >
                        {exercise.name}
                    </Typography>
                    <Stack>
                        < FavoriteButton exercise={exercise} toasts={props.toasts} />
                    </Stack>
                </div>
            ))}
        </div>
    )
}

export default ExerciseCard
