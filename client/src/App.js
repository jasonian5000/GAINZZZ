import { Box } from '@mui/material'
import { Footer } from './Components/Main'
import NavBar from './Components/NavBar/NavBar'
import PageRoutes from './Components/Main/PageRoutes'

function App() {
    return (
        <Box
            width="400px"
            sx={{ width: { xl: 'auto' } }}
            m="auto"
            className="mainBox"
        >
            <NavBar />
            <PageRoutes />
            <Footer />
        </Box>
    )
}

export default App
