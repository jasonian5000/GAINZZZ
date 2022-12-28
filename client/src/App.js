import "./App.css";
import { Box } from "@mui/material";
import Footer from './Components/Main/Footer'
import NewNav from "./Components/Main/NewNav";
import PageRoutes from "./Components/Main/PageRoutes";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "auto" }}} m="auto" className="mainBox">
      <NewNav/>
      <PageRoutes/>
      <Footer />
    </Box>

  );
}

export default App;
