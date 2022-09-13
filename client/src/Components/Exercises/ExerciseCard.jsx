import { useSelector } from 'react-redux'
import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../../css/exerciseCard.css'
import { addToFavorites } from '../../actions/supabase_client'

const ExerciseCard = () => {
    const searchResults = useSelector(state => state.search?.searchResults)
    return (
        <div className="cardContainer">
            {searchResults?.map((exercise, index) => (
                <div key={index} className="exerciseCard">
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
                    <img
                        src={exercise.gifUrl}
                        alt={exercise.name}
                        loading="lazy"
                    />
                    <Stack>
                        <Button
                            onClick={() => {
                                addToFavorites(exercise.id)
                            }}
                        >
                            Add to Favorites
                        </Button>
                    </Stack>
                </div>
            ))}
        </div>
    )
}

export default ExerciseCard
