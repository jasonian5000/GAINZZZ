import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'

const NavBar = () => {
  return (
    <Stack>
      <Link to="/">Home</Link>
      <Link to="/exercise_details">exercise details</Link>
      <Link to="/login_page">Login</Link>
      <Link to="/sign_up">sign up</Link>
    </Stack>
  );
}

export default NavBar
