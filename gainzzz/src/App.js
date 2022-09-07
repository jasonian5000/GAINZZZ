import './App.css';
import { findUser } from './actions/supabase';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ExerciseDetail from './Components/ExerciseDetail';



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
      </div>
      <Footer/>
    </Box>
  );
}

export default App;
