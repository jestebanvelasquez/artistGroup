import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getIdArtistByToken } from "../../../../redux/actions/Artists";
import { asignarCategoriaEvento, getAllCategories } from "../../../../redux/actions/Categories";
import { getEventsByIdArtist } from "../../../../redux/actions/Events";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { RootState } from "../../../../redux/store/store";

export default function AsignarRol() {
    const dispatch = useAppDispatch();
    const events = useAppSelector((state: RootState) => state.artists.events);
    const categories = useAppSelector((state: RootState) => state.categories.data);
    const [input, setInput] = useState({
        idEvento: "",
        idCategoria: ""
    });

    useEffect(() => {
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
        dispatch(getAllCategories());
    }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        asignarCategoriaEvento(input)
            .then(response => {
                if (response) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha asignado la categoría exitosamente',
                        showConfirmButton: true,
                        timer: 5000
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
            <div className="w-full h-full p-4">
                <div className="mb-10">
                    <p className="text-4xl text-center font-bold mb-5">Asignar categorias a eventos</p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label>Selecciona uno de tus eventos</label>
                            <select
                                name="idEvento"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue="" required>
                                <option value="" disabled>Seleccionar una opción</option>
                                {
                                    events && events.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <label>Selecciona la categoria</label>
                            <select
                                name="idCategoria"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue="" required>
                                <option value="" disabled>Seleccionar una opción</option>
                                {
                                    categories && categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">Asignar categoría</button>
                    </div>
                </form>
            </div>
        </>
    )
}