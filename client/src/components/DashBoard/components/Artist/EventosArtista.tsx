import { useEffect } from "react";
import Swal from "sweetalert2";
import { getIdArtistByToken } from "../../../../redux/actions/Artists";
import { deshabilitarEvento, getEventsByIdArtist } from "../../../../redux/actions/Events";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { RootState } from "../../../../redux/store/store";

interface ChangeViewProps {
    changeView: (value: string) => any;
}

export default function EventosArtista({ changeView }: ChangeViewProps) {
    const dispatch = useAppDispatch();
    const events = useAppSelector((state: RootState) => state.artists.events);

    const head = ['Id', 'Nombre', 'Descripción', 'Lugar', 'Imagen', 'Duración', 'Estado', 'Precio', 'Opciones'];

    useEffect(() => {
        getIdArtistByToken()
            .then(response => {
                dispatch(getEventsByIdArtist(String(response[0].id)));
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const deshabilitar = (idEvento: string, isActive: boolean) => {
        let status = isActive ? false : true;

        deshabilitarEvento(idEvento, status)
            .then(response => {
                if (response) {
                    getIdArtistByToken()
                        .then(response => {
                            dispatch(getEventsByIdArtist(String(response[0].id)));
                        }).catch(error => {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: error.response.data.message,
                                showConfirmButton: true,
                                timer: 5000
                            });
                        });
                }
            }).catch(error => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: true,
                    timer: 5000
                });
            })
    }

    return (
        <>
            <div className="w-full h-full p-4 overflow-auto">
                <p className="text-4xl text-center font-bold mb-5">Mis eventos</p>
                <button onClick={() => changeView('createEvent')} className="px-4 py-2 font-bold text-white float-right bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Crear evento</button>
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
                            events.map((e, i: number) => {
                                return (
                                    <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.id}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.name}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{e.description}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.lugar}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={e.imagesEvent[0]} width="150" alt="" />
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.duration} {e.tiempo}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.isActive ? 'Activo' : 'Inactivo'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.price}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><button onClick={() => deshabilitar(e.id, e.isActive)} className={`py-2 px-4 text-white rounded ${e.isActive ? 'bg-red-500' : 'bg-green-500'}`}>{e.isActive ? 'Deshabilitar' : 'Habilitar'} Evento</button></td>
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







