import { Navigate, Outlet } from "react-router-dom"
import axios from "axios";

const useAuth = () => {
    const token = localStorage.getItem('auth-token');
    let role = localStorage.getItem('role');
    role = JSON.parse(role!);

    if (token) {
        return {
            auth: true,
            role
        }
    } else {
        return {
            auth: false,
            role
        }
    }
}

//protected Route state
type ProtectedRouteType = {
    roleRequired?: "ADMINISTRADOR" | "USUARIO" | "ARTISTA"
}

const ProtectedRoutes = (props: ProtectedRouteType) => {
    const { auth, role } = useAuth();

    if (props.roleRequired) {
        return auth ? (
            role!.indexOf(props.roleRequired) > -1
        ) ? (
            <Outlet />
        ) : (
            <Navigate to="/denied" />
        ) : (
            <Navigate to="/login" />
        )
    } else {
        return auth ? <Outlet /> : <Navigate to="/login" />
    }
}

export default ProtectedRoutes