import WithPermission from "../../../WithPermission";

export default function AdminView(){
    return (
        <WithPermission roleRequired="ADMINISTRADOR" message="Este módulo sólo es apto para administradores">
            <h1>Sólo para administradores</h1>
        </WithPermission>
    )
}