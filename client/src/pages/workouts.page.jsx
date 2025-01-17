import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../features/workouts/workout.css'
import { Box, TextField, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import Timer from '../features/workouts/timer.component'
import FavWorkoutScroll from '../features/workouts/favorites-scroll.component'
import placeholder from '../features/workouts/exercise_placeholder.png'
import WorkoutCard from '../features/workouts/workout-card.component'
import { motion } from 'framer-motion'
import updateCompletedWorkouts from '../features/workouts/update-completed-workouts'
import searchExercises from '../features/exercises/search-exercises'
// import getUserFavs from '../features/workouts/get-user-favs'
import randomExercise from 'features/workouts/random-exercises'

const WorkoutsPage = () => {
    const dispatch = useDispatch()
    const [myLevel, setMyLevel] = useState('')
    const [mytarget, setMyTarget] = useState('')
    const [workoutImg, setWorkoutImg] = useState(placeholder)
    const searchResults = useSelector(state => state.search?.searchResults)
    const myWorkout = useSelector(state => state.workout?.myWorkout)
    const [reset, setReset] = useState(true)

    useEffect(() => {
        // getUserFavs(dispatch)
        // eslint-disable-next-line
    }, [])

    const setMyWorkout = workout => {
        dispatch({ type: 'ADD_WORKOUT', payload: workout })
    }

    const changeWorkout = index => {
        let replacementWorkout = randomExercise(searchResults, 1)[0]
        let newWorkout = myWorkout
        newWorkout[index] = replacementWorkout
        setMyWorkout(newWorkout)
        setWorkoutImg(placeholder)
    }

    const removeWorkout = index => {
        let newWorkout = myWorkout
        newWorkout.splice(index, 1)
        setMyWorkout(newWorkout)
        setWorkoutImg(placeholder)
    }

    return (
        <motion.div
            intial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <div className="workout-wrapper">
                <div className="workoutWrapper-overlay">
                    <div className="workout-container">
                        <div className="workout-box">
                            <h1 className="workout-title">
                                Choose your workout!
                            </h1>
                            <div className="select-container">
                                <Box className="inputSelect" width="350px">
                                    <TextField
                                        label="Target Muscle"
                                        select
                                        value={mytarget}
                                        onChange={e => {
                                            setMyTarget(e.target.value)
                                            searchExercises(
                                                e.target.value,
                                                dispatch
                                            )
                                        }}
                                        fullWidth
                                    >
                                        <MenuItem value="back">Back</MenuItem>
                                        <MenuItem value="cardio">
                                            Cardio
                                        </MenuItem>
                                        <MenuItem value="chest">Chest</MenuItem>
                                        <MenuItem value="lower arms">
                                            Lower Arms
                                        </MenuItem>
                                        <MenuItem value="lower legs">
                                            Lower Legs
                                        </MenuItem>
                                        <MenuItem value="neck">Neck</MenuItem>
                                        <MenuItem value="shoulders">
                                            Shoulders
                                        </MenuItem>
                                        <MenuItem value="upper arms">
                                            Upper Arms
                                        </MenuItem>
                                        <MenuItem value="upper legs">
                                            Upper Legs
                                        </MenuItem>
                                        <MenuItem value="waist">Abs</MenuItem>
                                    </TextField>
                                </Box>
                                <Box className="inputSelect" width="350px">
                                    <TextField
                                        label="Workout level"
                                        select
                                        value={myLevel}
                                        onChange={e =>
                                            setMyLevel(e.target.value)
                                        }
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
                                        const random = randomExercise(
                                            searchResults,
                                            myLevel
                                        )
                                        setMyWorkout(random)
                                        setWorkoutImg(placeholder)
                                    }}
                                >
                                    Get Workout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="myWorkout-wrapper">
                <h1 className="workoutTitle">
                    {mytarget.toUpperCase()} WORKOUT
                </h1>
                <div className="myWorkout-container">
                    <div className="leftSide">
                        <ul className="exercises">
                            <div key={reset} className="list-Wrapper">
                                {myWorkout
                                    ? myWorkout?.map((workout, index) => (
                                          <WorkoutCard
                                              key={workout.id}
                                              workout={workout}
                                              index={index}
                                              setWorkoutImg={setWorkoutImg}
                                              changeWorkout={changeWorkout}
                                              removeWorkout={removeWorkout}
                                              reset={reset}
                                              setReset={setReset}
                                          />
                                      ))
                                    : null}
                            </div>
                            <button
                                id="complete-btn"
                                key={myWorkout}
                                sx={{
                                    color: 'success.main',
                                    left: 40,
                                    display: 'active',
                                }}
                                style={{
                                    display: myWorkout[0] ? 'auto' : 'none',
                                }}
                                onClick={() => {
                                    updateCompletedWorkouts(dispatch)
                                    setMyWorkout([])
                                    setWorkoutImg(placeholder)
                                }}
                            >
                                Complete Workout
                            </button>
                        </ul>
                    </div>
                    <div className="rightSide">
                        <div className="img-wrapper">
                            <img
                                id="myWorkout-img"
                                src={workoutImg}
                                alt=""
                            ></img>
                        </div>
                        <Timer />
                    </div>
                </div>
                <div className="fav-scroll">
                    <FavWorkoutScroll />
                </div>
            </div>
        </motion.div>
    )
}

export default WorkoutsPage
