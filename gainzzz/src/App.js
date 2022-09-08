import './App.css';
import { findUser, getMuscleGroups } from './actions/supabase';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ExerciseDetail from "./components/ExerciseDetail"



function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m='auto'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path = "/exercise/:id" element={<ExerciseDetail/>}></Route>
      </Routes>
      <div className="App">
        GAINZZZ
        <button onClick={findUser}>find user</button>
        <button onClick={getMuscleGroups}>Get Workouts</button>
      </div>
      <Footer/>
    </Box>
  );
}

export default App;
