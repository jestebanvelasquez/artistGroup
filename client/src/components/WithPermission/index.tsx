import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getRoleByToken, LogoutUser, ValidateToken } from "../../redux/actions/Users";

type Props = {
    roleRequired: string[];
    message?: string;
    children?: React.ReactNode;
}

const useRole = () => {
    const navigate = useNavigate();
    let _role = localStorage.getItem('role');
    _role = JSON.parse(_role!);

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
                if (roles[0] !== _role![0]) {
                    LogoutUser()
                        .then(() => {
                            Swal.fire({
                                position: 'center',
                                icon: 'warning',
                                title: "Se te ha expulsado del sistema, no lo vuelvas a hacer...",
                                showConfirmButton: true,
                                timer: 5000
                            });
                            navigate("/login")
                        });
                } else {
                    localStorage.setItem('role', JSON.stringify(roles));
                }
            });
    })()

    if (_role) {
        return _role
    } else {
        return ''
    }
}

const WithPermission = ({ roleRequired, message, children }: Props) => {
    const role = useRole();
    return (
        <>
            {
                roleRequired.indexOf(role[0]) > -1 ? children :
                    message ? message : ''
            }
        </>
    )
}

export default WithPermission;