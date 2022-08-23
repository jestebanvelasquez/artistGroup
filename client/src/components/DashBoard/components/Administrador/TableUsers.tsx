import { useEffect } from 'react';
import { getAllUsers } from '../../../../redux/actions/Users';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';

export default function TableUsers() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users.data);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const head = ['Names', 'email', 'Rol', 'Ubication', 'Available', 'Options']

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
                            users.map((user, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.persona.name} {user.persona.lastname}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.email}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.rolesUsuarios.map(rol => `${rol.roles.nombre}, `)}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.persona.city} - {user.persona.country}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{user.isAvaliable ? "true" : "false"}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-blue-600 whitespace-nowrap cursor-pointer">{user.isAvaliable ? "Deshabilitar" : "Habilitar"}</td>
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





