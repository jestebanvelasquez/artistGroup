import { ViewProps } from "../..";
import PermissionDenied from "../../../PermissionDenied";
import CreateEvent from "../public/createEvent";
import EventosArtista from "./EventosArtista";
import AsignarCategoria from "./AsignarCategoria";

interface ViewArtistProps {
    view: ViewProps;
    changeView: (value: string) => any;
}

export default function ViewArtist({ view, changeView }: ViewArtistProps) {
    return (
        <div className="w-9/12 h-screen">
            {
                view.home ? <h1>Hola, bienvenido Artista!</h1> :
                    view.eventosArtista ? <EventosArtista changeView={(value: string) => changeView(value)} /> :
                        view.createEvent ? <CreateEvent /> :
                            view.assignCategoryEvent ? <AsignarCategoria /> :
                                <PermissionDenied />
            }
        </div>
    )
}