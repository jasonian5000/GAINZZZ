import React, { useState } from 'react'
import ExerciseDetail from './ExerciseDetail'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <div>
      <ExerciseDetail bodyPart={bodyPart} setBodyPart = {setBodyPart}/>
    </div>
  )
}

export default Home