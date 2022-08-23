import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getRoleByToken, LogoutUser, ValidateToken } from "../redux/actions/Users";

const useAuth = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('auth-token');

    (async () => {
        //Validar el token del usuario
        await ValidateToken()
            .then(response => {
                if (!response.authorized) {
                    LogoutUser()
                        .then(() => navigate("/login"));
                }
            });
        //Obtener los roles del usuario
        await getRoleByToken()
            .then(response => {
                var roles: string[] = [];
                response.map((rol: { roles: { nombre: string; }; }) => roles.push(rol.roles.nombre));
                localStorage.setItem('role', JSON.stringify(roles));
            });
    })()

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
    roleRequired?: string[]
}

const ProtectedRoutes = ({ roleRequired }: ProtectedRouteType) => {
    const { auth, role } = useAuth();

    if (roleRequired) {
        return auth ? (
            roleRequired.indexOf(role![0]) > -1
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