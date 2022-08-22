import { Navigate, Outlet } from "react-router-dom"
import axios from "axios";
import { RUTA_APP } from "..";

const useAuth = () => {
    const token = localStorage.getItem('auth-token');

    (async () => {
        //Obtener los roles del usuario
        const roleResponse = await axios.get(`${RUTA_APP}users/role`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var roles: string[] = [];
        roleResponse.data.map((rol: { roles: { nombre: string; }; }) => roles.push(rol.roles.nombre));

        localStorage.setItem('role', JSON.stringify(roles));
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