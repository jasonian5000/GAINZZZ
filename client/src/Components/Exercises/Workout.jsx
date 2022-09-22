import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/workout.css'
import { Box, TextField, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import { searchExercises } from '../../actions/searchExercises_client'
import {
    setFavWorkouts,
    randomWorkout,
    addWorkoutsCompleted,
} from '../../actions/workoutBuilder'
import Timer from '../Timer'
import { setMyWorkout } from '../../actions/myWorkout.Actions'
import FavWorkoutScroll from './FavWorkoutScroll'

const Workout = () => {
    const dispatch = useDispatch()
    const [myLevel, setMyLevel] = useState('')
    const [mytarget, setMyTarget] = useState('')
    const [workoutImg, setWorkoutImg] = useState('')
    const [reset, setReset] = useState(1)
    const searchResults = useSelector(state => state.search?.searchResults)
    const myWorkout = useSelector(state => state.workout?.myWorkout)

    useEffect(
        () => {
            setFavWorkouts(dispatch)
        },
        // eslint-disable-next-line
        []
    )

    const changeWorkout = index => {
        let replacementWorkout = randomWorkout(searchResults, 1)[0]
        let newWorkout = myWorkout
        newWorkout[index] = replacementWorkout
        setMyWorkout(dispatch, newWorkout)
        console.log(myWorkout)
        setWorkoutImg('')
        setReset(Math.random())
    }

    const removeWorkout = index => {
        let newWorkout = myWorkout
        newWorkout.splice(index, 1)
        setMyWorkout(dispatch, newWorkout)
        console.log(myWorkout)
        setWorkoutImg('')
        setReset(Math.random())
    }

    return (
        <div className="workout-wrapper">
            <div>
            <FavWorkoutScroll/>
            </div>

            <div className="workout-box">
                <h1 className="workout-title">Choose your workout!</h1>
                <div className="select-container">
                    <Box className="inputSelect" width="350px">
                        <TextField
                            label="Target Muscle"
                            select
                            value={mytarget}
                            onChange={e => {
                                setMyTarget(e.target.value)
                                searchExercises(e.target.value, dispatch)
                            }}
                            fullWidth
                        >
                            <MenuItem value="back">Back</MenuItem>
                            <MenuItem value="cardio">Cardio</MenuItem>
                            <MenuItem value="chest">Chest</MenuItem>
                            <MenuItem value="lower arms">Lower Arms</MenuItem>
                            <MenuItem value="lower legs">Lower Legs</MenuItem>
                            <MenuItem value="neck">Neck</MenuItem>
                            <MenuItem value="shoulders">Shoulders</MenuItem>
                            <MenuItem value="upper arms">Upper Arms</MenuItem>
                            <MenuItem value="upper legs">Upper Legs</MenuItem>
                            <MenuItem value="waist">Abs</MenuItem>
                        </TextField>
                    </Box>
                    <Box className="inputSelect" width="350px">
                        <TextField
                            label="Workout level"
                            select
                            value={myLevel}
                            onChange={e => setMyLevel(e.target.value)}
                            fullWidth
                        >
                            <MenuItem value="3">Quick</MenuItem>
                            <MenuItem value="5">Moderate</MenuItem>
                            <MenuItem value="7">Intense</MenuItem>
                        </TextField>
                    </Box>
                </div>
                <div className="workout-btn">
                    <Button
                        id="get-workout-btn"
                        onClick={() => {
                            const random = randomWorkout(searchResults, myLevel)
                            setMyWorkout(dispatch, random)
                            setWorkoutImg('')
                        }}
                    >
                        Get Workout
                    </Button>
                </div>
            </div>
            <h1>Your Workout</h1>
            <div className="myWorkout-container">
                <ul className="exercises" key={reset}>
                    {myWorkout
                        ? myWorkout?.map((workout, index) => (
                              <Box
                                  id="myWorkout-card"
                                  key={index}
                                  workoutid={workout.id || workout}
                                  title={workout.id || workout}
                                  m="0 40px"
                              >
                                  <Button
                                      id="exercise-btn"
                                      value={workout.gifUrl}
                                      onClick={e => {
                                          setWorkoutImg(e.target.value)
                                      }}
                                  >
                                      {workout.name}
                                  </Button>
                                  <button id='newExercise-btn' onClick={() => changeWorkout(index)}>
                                      Shuffle
                                  </button>
                                  <button id="newExercise-btn" onClick={() => removeWorkout(index)}>Remove</button>
                              </Box>
                          ))
                        : null}
                    <Button
                        id='complete-btn'
                        key={myWorkout}
                        sx={{
                            color: 'success.main',
                            left: 40,
                            display: 'active',
                        }}
                        style={{ display: myWorkout[0] ? 'auto' : 'none' }}
                        onClick={() => {
                            addWorkoutsCompleted()
                            setMyWorkout(dispatch, [])
                            setWorkoutImg('')
                        }}
                    >
                        Complete Workout
                    </Button>
                </ul>
                <img id="myWorkout-img" src={workoutImg} alt={workoutImg}></img>
            </div>
            <Timer />
        </div>
    )
}

export default Workout
