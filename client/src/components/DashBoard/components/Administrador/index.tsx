import { ViewProps } from "../..";
import PermissionDenied from "../../../PermissionDenied";
import AsignarRol from "./AsignarRol";
import TableEvents from "./TableEvents";
import TableUsers from "./TableUsers";

interface ViewAdminProps {
    view: ViewProps;
}

export default function ViewAdmin({ view }: ViewAdminProps) {
    return (
        <div className="w-9/12 h-screen">
            {
                view.home ? <h1>Hola, bienvenido Administrador!</h1> :
                    view.tableUser ? <TableUsers /> :
                        view.tableEvent ? <TableEvents /> :
                            view.asignarRol ? <AsignarRol /> :
                                <PermissionDenied />
            }
        </div>
    )
}