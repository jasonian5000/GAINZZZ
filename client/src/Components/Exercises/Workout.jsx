import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/workout.css'
import { Box, TextField, MenuItem, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { searchExercises } from '../../actions/searchExercises_client'
import Timer from '../Timer'

const Workout = () => {
    const dispatch = useDispatch()
    const [myLevel, setMyLevel] = useState('')
    const [mytarget, setMyTarget] = useState('')
    const [myWorkout, setMyWorkout] = useState('')
    const [workoutImg, setWorkoutImg] = useState('')
    const [reset, setReset] = useState(1)
    const searchResults = useSelector(state => state.search?.searchResults)
    const favWorkouts = useSelector(
        state => state.favoriteWorkouts.favoriteWorkouts
    )

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
        setMyWorkout(newWorkout)
        console.log(myWorkout)
        setWorkoutImg('')
        setReset(Math.random())
    }

    return (
        <div className="workout-container">
            <h1>Favorite Exercises</h1>
            <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
                {favWorkouts?.map(workout => {
                    return (
                        <Stack key={workout.id}>
                            <FavoritesCard workout={workout} />
                        </Stack>
                    )
                })}
            </Box>
            <p>(Add them to your workout)</p>
            <h1>Choose your workout!</h1>
            <Box className="inputSelect" width="250px">
                <TextField
                    label="Target Muscle"
                    select
                    value={mytarget}
                    onChange={handleBodyChange}
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
            <Box className="inputSelect" width="250px">
                <TextField
                    label="Workout level"
                    select
                    value={myLevel}
                    onChange={handleLevelChange}
                    fullWidth
                >
                    <MenuItem value="3">Quick</MenuItem>
                    <MenuItem value="5">Moderate</MenuItem>
                    <MenuItem value="7">Intense</MenuItem>
                </TextField>
            </Box>
            <Button
                onClick={() => {
                    handleSearch()
                    setWorkoutImg('')
                }}
            >
                Get Workout
            </Button>
            <h1>Your Workout</h1>
            <div className="myWorkout-container">
                <ul className="exercises">
                    {myWorkout
                        ? myWorkout?.map((workout, index) => (
                              <Box
                                  key={index}
                                  workoutid={workout.id || workout}
                                  title={workout.id || workout}
                                  m="0 40px"
                              >
                                  <Button
                                      value={workout.gifUrl}
                                      onClick={e => {
                                          setWorkoutImg(e.target.value)
                                      }}
                                  >
                                      {workout.name}
                                  </Button>
                              </Box>
                          ))
                        : null}
                </ul>
                <img src={workoutImg}></img>
            </div>
            <Timer />
        </div>
    )
}

export default Workout
