type Props = {
    roleRequired: "ADMINISTRADOR" | "USUARIO" | "ARTISTA";
    message?: string;
    children?: React.ReactNode;
}

const useRole = () => {
    let _role = localStorage.getItem('role');
    _role = JSON.parse(_role!);

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
                role!.indexOf(roleRequired) > -1 ? children :
                    <h3>{message ? message : ''}</h3>
            }
        </>
    )
}

export default WithPermission;