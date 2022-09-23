import { Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Feature from './Feature'
import Title from './Title'

const Home = () => {
  const [pass, setPass] = useState(false)
  const location = useLocation()
  useEffect(
      () => {
          setPass(location?.state?.pass)
      },
      // eslint-disable-next-line
      []
  )
  return (
      <div className="home">
          <Title />
          <Feature />
          <Snackbar
              sx={{
                  '& .MuiSnackbarContent-root': { backgroundColor: 'green' },
              }}
              message="Login Successful! Welcome to Gainzzz!"
              open={pass}
              autoHideDuration={6000}
              onClose={() => {
                  setPass(false)
              }}
          />
      </div>
  )
}

export default Home
