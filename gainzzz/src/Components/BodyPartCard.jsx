import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../css/bodyPartCard.css'

const BodyPartCard = ({ bodyPart, setBodyPart, item }) => {
  const helloRyan = "Hello ryan"
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className="bodyPartCard"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625': '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          gap: '47px'}}
    >
      <img src={require('../images/gym.webp')} style={{ width: '50px', height: '50' }} />
      <Typography fontSize='24px' fontWeight="bold" textTransform="capitalize">{item}</Typography>
    </Stack>
  );  
}

export default BodyPartCard