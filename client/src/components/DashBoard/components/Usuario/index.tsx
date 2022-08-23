import { ViewProps } from "../..";
import PermissionDenied from "../../../PermissionDenied";
import TableUsers from "../Administrador/TableUsers";

interface ViewUsuarioProps {
    view: ViewProps;
}

export default function ViewUsuario({ view }: ViewUsuarioProps) {
    return (
        <div className="w-9/12 h-screen">
            {
                view.home ? <h1>Hola, bienvenido Usuario!</h1> :
                    view.tableUser ? <TableUsers /> :
                        <PermissionDenied />
            }
        </div>
    )
}