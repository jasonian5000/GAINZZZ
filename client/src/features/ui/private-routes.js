import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = (props) => {
    let user = props.user
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes