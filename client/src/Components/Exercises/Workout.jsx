import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import { useSelector } from 'react-redux'

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
    <HorizontalScrollBar/>
  )
}

export default Workout