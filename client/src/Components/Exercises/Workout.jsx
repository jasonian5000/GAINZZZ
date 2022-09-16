import React, {useState} from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import { useSelector } from 'react-redux'
import '../../css/workout.css'
import {Box, TextField, MenuItem} from '@mui/material'

const Workout = () => {
  const searchResults = useSelector(state => state.search?.searchResults)
    const quick = 3
    const moderate = 5
    const intense = 7
    const randomworkout = (arr, num) => {
        const random = [...arr].sort(() => 0.5 - Math.random())
        return random.slice(0, num)
      }
      
  console.log(randomworkout(searchResults, quick))
  console.log(randomworkout(searchResults, moderate))
  console.log(randomworkout(searchResults, intense))
  
  
  return (
    <div className='workout-search-container'>
      <h1>Choose your workout!</h1>
      <HorizontalScrollBar />
      <Box width='250px'>
        <TextField
          label='Workout level'
          select
          value={''}
          onChange={''}
        fullWidth>
        <MenuItem value='quick'>Quick</MenuItem>
        <MenuItem value='moderate'>Moderate</MenuItem>
        <MenuItem value='intense'>Intense</MenuItem>
        </TextField>
      </Box>
      </div>
  )
}

export default Workout