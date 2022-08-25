import { ViewProps } from "../..";
import PermissionDenied from "../../../PermissionDenied";

interface ViewUsuarioProps {
    view: ViewProps;
}

export default function ViewUsuario({ view }: ViewUsuarioProps) {
    return (
        <div className="w-9/12 h-screen">
            {
                view.home ? <h1>Hola, bienvenido Usuario!</h1> :
                    <PermissionDenied />
            }
        </div>
    )
}