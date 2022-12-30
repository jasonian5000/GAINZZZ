import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = (props) => {
    return props.loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes