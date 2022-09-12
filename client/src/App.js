import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Components/Home";
import ExerciseDetail from "./Components/ExerciseDetails";
import Footer from "./Components/Footer";
import { LoginPage } from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import AccountInformation from "./Components/AccountInformation";
import NewNav from "./Components/NewNav";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1888px" }}} m="auto">
      <NewNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise_details" element={<ExerciseDetail />} />
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/account_information" element={<AccountInformation />} />
      </Routes>
      <Footer />
    </Box>

  );
}

export default App;
