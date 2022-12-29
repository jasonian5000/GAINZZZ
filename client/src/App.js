import { Box } from '@mui/material'
import { Footer } from './Components/Home'
import NewNav from './Components/Home/NewNav'
import PageRoutes from './Components/Home/PageRoutes'

function App() {
    return (
        <Box
            width="400px"
            sx={{ width: { xl: 'auto' } }}
            m="auto"
            className="mainBox"
        >
            <NewNav />
            <PageRoutes />
            <Footer />
        </Box>
    )
}

export default App
