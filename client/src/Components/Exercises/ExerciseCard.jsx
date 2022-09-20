import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import '../../css/exerciseCard.css'
import { addToFavorites } from '../../actions/supabase_client'
import { markFavorites } from '../../actions/searchExercises_client'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const ExerciseCard = (props) => {
    // const favorites = useSelector((state) => state.favoriteWorkouts.favoriteWorkouts)
    const [visibleDetails, setVisibleDetails] = useState(false)
    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
        }
    return (
        <div className="cardContainer">
            {props.current?.map((exercise, index) => (
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
                            className="exerciseCardButton"
                            variant="outlined"
                            size="small"
                            onClick={() => {
                                addToFavorites(exercise.id);markFavorites(exercise.id)
                            }}
                        >
                            {/* find fix for why bottom doesnt change */}
                            <FavoriteTwoToneIcon style={{ display: !visibleDetails ? <FavoriteSharpIcon/> : 'auto'}}/> 
                        </Button>
                    </Stack>
                </div>
            ))}
        </div>
    )
}

export default ExerciseCard
