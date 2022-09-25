import React from 'react'
import { Typography } from '@mui/material'
import { removeFavorite } from '../../actions/supabase_client'
import { useDispatch } from 'react-redux'
import { addExerciseToWorkout } from '../../actions/myWorkout.Actions'
import '../../css/favCard.css'
import Toasts from '../Toasts'
import { useState } from 'react'
import { Slide } from '@mui/material'

const UserAccountInformation = props => {
    const dispatch = useDispatch()
    const [removeFavToast, setRemoveFavToast] = useState(false)
    const [addWorkoutToast, setAddWorkoutToast] = useState(false)
    const [slideIn, setSlideIn] = useState(true)
    let toasts = {
        removeFavToast,
        setRemoveFavToast,
        addWorkoutToast,
        setAddWorkoutToast,
    }
    return (
        <>
            <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit>
                <div className="favCard">
                    <img
                        id="fav-img"
                        src={props?.workout?.gifUrl}
                        alt=""
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
                        {props?.workout?.name}
                    </Typography>
                    <button
                        id="removeFav-btn"
                        onClick={() => {
                            removeFavorite(
                                props?.workout?.id,
                                setRemoveFavToast,
                                dispatch
                            )
                            setSlideIn(false)
                        }}
                    >
                        Remove from Favorites
                    </button>
                    <button
                        id="addTo-btn"
                        onClick={() => {
                            addExerciseToWorkout(dispatch, props.workout)
                            setAddWorkoutToast(true)
                        }}
                    >
                        Add to workout
                    </button>
                </div>
            </Slide>
            <Toasts toasts={toasts} />
        </>
    )
}

export default UserAccountInformation
