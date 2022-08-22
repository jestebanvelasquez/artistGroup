import { useEffect, useState } from "react";
import { getAllRoles } from "../../../../redux/actions/Roles";
import { getAllUsers } from "../../../../redux/actions/Users";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { RootState } from "../../../../redux/store/store";

interface RolesProps {
    id: string;
    nombre: string;
}

interface FormRoleProps {
    idUsuario: string;
    idRol: string;
}

export default function AsignarRol() {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: RootState) => state.users.data);
    const [roles, setRoles] = useState<RolesProps[]>();
    const [input, setInput] = useState<FormRoleProps>({
        idUsuario: "",
        idRol: ""
    });

    useEffect(() => {
        dispatch(getAllUsers());
        getAllRoles().then(response => setRoles(response));
    }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div className="w-9/12 h-screen">
            <div className="w-full h-full p-4">
                <div className="mb-10">
                    <p className="text-2xl font-extralight text-center">En este módulo se puede asignar un rol a un usuario, primero selecciona el usuario y luego el rol que quieres asignarle, puedes ver la información de los usuarios en la sección de <strong className="font-extrabold">All Users</strong></p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label>Selecciona el usuario</label>
                            <select
                                name="idUsuario"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue="" required>
                                <option value="" disabled>Seleccionar una opción</option>
                                {
                                    users && users.map(user => <option key={user.id} value={user.id}>{user.persona.name} {user.persona.lastname}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label>Selecciona el rol</label>
                            <select
                                name="idRol"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue="" required>
                                <option value="" disabled>Seleccionar una opción</option>
                                {
                                    roles && roles.map(role => <option key={role.id} value={role.id}>{role.nombre}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Asignar rol</button>
                    </div>
                </form>
            </div>
        </div>
    )
}