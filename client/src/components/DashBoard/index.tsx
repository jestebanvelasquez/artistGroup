import { useState } from "react";
import NavbarDashboard from "./components/NavbarDashboard";
import WithPermission from "../WithPermission";
import ViewUsuario from "./components/Usuario";
import ViewAdmin from "./components/Administrador";
import ViewArtist from "./components/Artist"

export interface ViewProps {
    [key: string]: boolean;
}

export default function Dashboard() {

    const [view, setView] = useState<ViewProps>({
        home: true,
        /* Modulos del Artista */
        eventosArtista: false,
        createEvent: false,
        assignCategoryEvent: false,
        /* Modulos del administrador */
        asignarRol: false,
        allEvents: false,
        allUsers: false
    });

    const changeView = (prop: string) => {
        for (var name in view) {
            view[name] = false;
            view[prop] = true;
        }
        setView(() => {
            return {
                ...view
            }
        });
    }

    return (
        <>
            <div className="flex flex-row flex-wrap bg-gray-100 w-full">
                <NavbarDashboard changeView={(value: string) => changeView(value)} />

                <WithPermission roleRequired={["ADMINISTRADOR"]}>
                    <ViewAdmin view={view} changeView={(value: string) => changeView(value)} />
                </WithPermission>

                <WithPermission roleRequired={["ARTISTA"]}>
                    <ViewArtist view={view} changeView={(value: string) => changeView(value)} />
                </WithPermission>

                <WithPermission roleRequired={["USUARIO"]}>
                    <ViewUsuario view={view} />
                </WithPermission>

            </div>
        </>
    )
}
