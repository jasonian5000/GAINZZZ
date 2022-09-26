import "./App.css";
import { Box } from "@mui/material";
import Footer from './Components/General Layout/Footer'
import NewNav from "./Components/General Layout/NewNav";
import AnimatedRoutes from "./Components/General Layout/AnimatedRoutes";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "auto" }}} m="auto" className="mainBox">
      <NewNav/>
      <AnimatedRoutes/>
      <Footer />
    </Box>

  );
}

export default App;
