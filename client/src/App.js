import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './Components/General Layout/Home'
import ExerciseDetails from "./Components/Exercises/ExerciseDetails";
import { LoginPage } from "./Components/Login/LoginPage";
import SignUpPage from "./Components/SignUp/SignUpPage";
import AccountInformation from "./Components/Account Info/AccountInformation";
import PersonalTrainers from "./Components/PT/PersonalTrainers";
import Footer from './Components/General Layout/Footer'
import NewNav from "./Components/General Layout/NewNav";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1888px" }}} m="auto">
      <NewNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise_details" element={<ExerciseDetails />} />
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/account_information" element={<AccountInformation />} />
        <Route path="/personal_trainers" element={<PersonalTrainers />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
