import React from 'react'
import { Typography } from '@mui/material'
import { removeFavorite } from '../../actions/supabase_client'
import { useDispatch } from 'react-redux'
import { setFavWorkouts } from '../../actions/workoutBuilder'
import { addExerciseToWorkout } from '../../actions/myWorkout.Actions'

const UserAccountInformation = props => {
    const dispatch = useDispatch()
    return (
        <div>
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
            <img id='fav-img'src={props?.workout?.gifUrl} alt="" loading="lazy" />
            <button onClick={() => {removeFavorite(props?.workout?.id); setFavWorkouts(dispatch)}}>
                Remove from Favorites
            </button>
            <button onClick={()=>{addExerciseToWorkout(dispatch, props.workout)}}>Add to workout</button>
        </div>
    )
}

export default UserAccountInformation
