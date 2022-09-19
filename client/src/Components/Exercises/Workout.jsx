import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/workout.css'
import { Box, TextField, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import { searchExercises } from '../../actions/searchExercises_client'

const Workout = () => {
  const dispatch = useDispatch()
  const [myLevel, setMyLevel] = useState('')
  const [mytarget, setMytarget] = useState('')
  const [myWorkout, setMyWorkout] = useState('')
  const searchResults = useSelector(state => state.search?.searchResults)
  
  const handleLevelChange = (e) => {
    setMyLevel(e.target.value)
    // randomworkout(searchResults, e.target.value)
    // console.log(randomworkout(searchResults, e.target.value))
  }
  
  const handleBodyChange = (e) => {
    setMytarget(e.target.value)
    searchExercises(e.target.value, dispatch)
  }
  const handleSearch = () => {
    const workoutDisplay = randomworkout(searchResults, myLevel )
    setMyWorkout(workoutDisplay)
    console.log('my workout', workoutDisplay)
  }


    const randomworkout = (arr, num) => {
        const random = [...arr].sort(() => 0.5 - Math.random())
        return random.slice(0, num)
      }

  
  return (
    <div className='workout-container'>
      <h1>Choose your workout!</h1>
      <h1>Favortied Exercises</h1>
      <p>(Add them to your workout)</p>
      <Box width='250px'>
        <TextField
          label='Target Muscle'
          select
          value={mytarget}
          onChange={handleBodyChange}
        fullWidth>
        <MenuItem value='back'>Back</MenuItem>
        <MenuItem value='cardio'>Cardio</MenuItem>
        <MenuItem value='chest'>Chest</MenuItem>
        <MenuItem value='lower arms'>Lower Arms</MenuItem>
        <MenuItem value='lower legs'>Lower Legs</MenuItem>
        <MenuItem value='neck'>Neck</MenuItem>
        <MenuItem value='shoulders'>Shoulders</MenuItem>
        <MenuItem value='upper arms'>Upper Arms</MenuItem>
        <MenuItem value='upper legs'>Upper Legs</MenuItem>
        <MenuItem value='waist'>Abs</MenuItem>
        </TextField>
      </Box>
      <Box width='250px' >
        <TextField
          label='Workout level'
          select
          value={myLevel}
          onChange={handleLevelChange}
        fullWidth>
        <MenuItem value='3' >Quick</MenuItem>
        <MenuItem value='5'>Moderate</MenuItem>
        <MenuItem value='7'>Intense</MenuItem>
        </TextField>
      </Box>
      <Button onClick={() => {handleSearch() }}>Get Workout</Button>
      <h1>Your Workout</h1>
      {myWorkout ? myWorkout?.map((workout) => (
        <Box m="0 40px">
          <Button>{workout.name}</Button>
        </Box>)) :
        null}
      </div>
  )
}

export default Workout