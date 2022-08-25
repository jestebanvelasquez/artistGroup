import { useEffect } from 'react';
import { getAllUsers } from '../../../../redux/actions/Users';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';

export default function AllUsers() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.dashboard.users);
    const head = ['Nombres', 'Correo electrónico', 'Rol', 'Ubicación', 'Estado', 'Opciones']

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const deshabilitar = (idUsuario: string, isActive: boolean) => {
        let status = isActive ? false : true;
        console.log(idUsuario, status);
    }

    return (
        <>
            <div className="w-full h-full p-4 overflow-auto">
                <p className="text-4xl text-center font-bold mb-5">Table Users</p>
                <table className="divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            {
                                head.map((e, i) => {
                                    return (
                                        <th key={i} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 capitalize dark:text-gray-400">
                                            {e}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {
                            users.map((user: any, i: number) => {
                                return (
                                    <tr key={i}>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.persona.name} {user.persona.lastname}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.email}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.rolesUsuarios.map((rol: any) => `${rol.roles.nombre}, `)}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.persona.city} - {user.persona.country}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.isAvaliable ? "Activo" : "Inactivo"}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-blue-600 whitespace-nowrap cursor-pointer"><button onClick={() => deshabilitar(user.id, user.isAvaliable)} className={`py-2 px-4 text-white rounded ${user.isAvaliable ? 'bg-red-500' : 'bg-green-500'}`}>{user.isAvaliable ? 'Deshabilitar' : 'Habilitar'} Evento</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}





