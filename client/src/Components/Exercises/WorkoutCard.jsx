import { Button, Slide } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function WorkoutCard(props) {
    let {workout, index, setWorkoutImg, changeWorkout, removeWorkout, setReset, reset} = props
    const [slideIn, setSlideIn] = useState(true)

    
    return (
        <Slide direction="up" in={slideIn} mountOnEnter unmountOnExit>
            <div id="myWorkout-card" >
                <input className="keepSignIn" type="checkbox" />
                <Button
                    id="exercise-btn"
                    value={workout.gifUrl}
                    onClick={e => {
                        setWorkoutImg(e.target.value)
                    }}
                >
                    {workout.name}
                </Button>
                <div className="workoutBtn-container">
                    <button
                        id="newExercise-btn"
                        onClick={() => {changeWorkout(index)
                        setReset(!reset)}}
                    >
                        Shuffle
                    </button>
                    <button
                        id="newExercise-btn"
                        onClick={() => {
                            removeWorkout(index)
                            setSlideIn(false)
                        }}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </Slide>
    )
}
