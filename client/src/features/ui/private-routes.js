import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = (props) => {
    let token = props.loggedIn
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes