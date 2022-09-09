import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'

const NavBar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" }, justifyContent: "none" }} px="20px">
      <Link to="/">
        <img src={require("../images/gym.webp")} style={{ width: "50px", height: "50", margin: "0 20px" }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: "none", color: "#3a1212" }}>
          Home
        </Link>
        <Link to="/exercise_details" style={{ textDecoration: "none", color: "#3a1212" }}>
          exercise details
        </Link>
        <Link to="/login_page" style={{ textDecoration: "none", color: "#3a1212" }}>
          Login
        </Link>
        <Link to="/sign_up" style={{ textDecoration: "none", color: "#3a1212" }}>
          sign up
        </Link>
      </Stack>
    </Stack>
  );
}

export default NavBar
