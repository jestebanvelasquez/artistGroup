import { ViewProps } from "../..";
import PermissionDenied from "../../../PermissionDenied";
import TableEvents from "../Administrador/TableEvents";

interface ViewArtistProps {
    view: ViewProps;
}

export default function ViewArtist({ view }: ViewArtistProps) {
    return (
        <div className="w-9/12 h-screen">
            {
                view.home ? <h1>Hola, bienvenido Artista!</h1> :
                    view.tableEvent ? <TableEvents /> :
                        <PermissionDenied />
            }
        </div>
    )
}