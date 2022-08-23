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
        asignarRol: false,
        tableUser: false,
        tableUserDisabled: false,
        tableEvent: false
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
                    <ViewAdmin view={view} />
                </WithPermission>

                <WithPermission roleRequired={["ARTISTA"]}>
                    <ViewArtist view={view} />
                </WithPermission>

                <WithPermission roleRequired={["USUARIO"]}>
                    <ViewUsuario view={view} />
                </WithPermission>

            </div>
        </>
    )
}
