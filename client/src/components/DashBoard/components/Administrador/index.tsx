import { ViewProps } from "../..";
import PermissionDenied from "../../../PermissionDenied";
import AsignarRol from "./AsignarRol";
import AllEvents from "./AllEvents";
import AllUsers from "./AllUsers";

interface ViewAdminProps {
    view: ViewProps;
    changeView: (value: string) => any;
}

export default function ViewAdmin({ view, changeView }: ViewAdminProps) {
    return (
        <div className="w-9/12 h-screen">
            {
                view.home ? <h1>Hola, bienvenido Administrador!</h1> :
                    view.asignarRol ? <AsignarRol /> :
                        view.allUsers ? <AllUsers /> :
                            view.allEvents ? <AllEvents changeView={(value: string) => changeView(value)} /> :
                                <PermissionDenied />
            }
        </div>
    )
}