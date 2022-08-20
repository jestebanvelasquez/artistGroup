import axios from "axios";
import { useState } from "react";
//import Table from "./components/Table";
import Navbar from "./components/Navbar";
import AllEvents from "./components/Administrador/AllEvents";
import AllUsers from "./components/Administrador/AllUsers";
import WithPermission from "../WithPermission";
import { getAllUsers } from "../../redux/actions/Users";
import { useAppDispatch } from "../../redux/hooks/hooks";

export default function Dashboard() {
    // const events = useAppSelector(state => state.events.events)
    // const users = useAppSelector(state => state.users.data)
    const dispatch = useAppDispatch();

    const [view, setView] = useState({
        home: true,
        tableUser: false,
        tableEvent: false
        // tableUser: false
    })

    const home = () => {
        (async () => {
            const token = localStorage.getItem('auth-token');
            //Obtener los roles del usuario
            const roleResponse = await axios.get('http://localhost:4000/users/role', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            var roles: string[] = [];
            roleResponse.data.map((rol: { roles: { nombre: string; }; }) => {
                roles.push(rol.roles.nombre);
            });

            localStorage.setItem('role', JSON.stringify(roles));
        })()
        setView({
            home: true,
            tableUser: false,
            tableEvent: false
        })
    }

    const allEvents = () => {
        //dispatch(getAllEvents())
        setView({
            home: false,
            tableUser: false,
            tableEvent: true
        })
    }
    const allUsers = () => {
        dispatch(getAllUsers())
        setView({
            home: false,
            tableUser: true,
            tableEvent: false
        })
    }

    return (
        <>
            <div className='flex flex-row flex-wrap bg-gray-100'>
                <Navbar home={home} allEvents={allEvents} allUsers={allUsers} />
                {
                    view.home ?
                        <WithPermission roleRequired="USUARIO">
                            <h2>Este es un mensaje principal</h2>
                        </WithPermission> :
                        view.tableEvent ?
                            <WithPermission roleRequired="ADMINISTRADOR">
                                <AllUsers />
                            </WithPermission> :
                            view.tableUser ?
                                <WithPermission roleRequired="ADMINISTRADOR">
                                    <AllEvents />
                                </WithPermission> :
                                'no hay nada'
                }
            </div>
        </>
    )
}
