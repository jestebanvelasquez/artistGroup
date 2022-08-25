import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getIdArtistByToken } from "../../../../redux/actions/Artists";
import { createEvent } from "../../../../redux/actions/Events";
import { useAppDispatch } from "../../../../redux/hooks/hooks";

interface createEventProps {
    name: string;
    description: string;
    lugar: string;
    image: string;
    imagesEvent: string[];
    duration: string;
    price: string;
    tiempo: string;
}

export default function CreateEvent() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState<createEventProps>({
        name: '',
        description: '',
        lugar: '',
        image: '',
        imagesEvent: [],
        duration: '',
        price: '',
        tiempo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Obtener el id del artista con el token
        getIdArtistByToken()
            .then(artista => {
                if (artista.length > 0) {
                    const data = {
                        name: input.name,
                        description: input.description,
                        lugar: input.lugar,
                        imagesEvent: input.imagesEvent,
                        duration: input.duration,
                        price: Number(input.price),
                        tiempo: input.tiempo,
                        artistaId: artista[0].id
                    }
                    createEvent(data)
                        .then(evento => {
                            if (evento) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Se ha creado el evento exitosamente',
                                    showConfirmButton: true,
                                    timer: 5000
                                });
                                setInput({
                                    name: '',
                                    description: '',
                                    lugar: '',
                                    image: '',
                                    imagesEvent: [],
                                    duration: '',
                                    price: '',
                                    tiempo: ''
                                });
                            } else {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'Ocurrió un error al crear el evento, verifica los campos nuevamente',
                                    showConfirmButton: true,
                                    timer: 5000
                                });
                            }
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

    const pushImage = () => {
        if (input.image.length === 0) {
            alert('Ingresa una url de una imagen para cargarla');
        } else {
            if (input.imagesEvent.length > 0) {
                alert('Por ahora sólo se admite una imagen principal del evento');
            } else {
                setInput({
                    ...input,
                    imagesEvent: [...input.imagesEvent, input.image],
                    image: ''
                });
            }
        }
    }

    return (
        <div className="w-full h-screen overflow-scroll">
            <div className="m-10">
                <p className="text-4xl text-center font-bold mb-5">Crear un evento</p>
                <p className="text-xl font-extralight text-justify mb-5">
                    En esta sección podrás crear tu evento, que se verán reflejados en la página principal, trata de llenar los campos necesarios para dar a conocer el evento a las diferentes personas que ingresan a la plataforma.
                </p>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Nombre del evento</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresa el nombre del evento"
                            name="name"
                            value={input.name}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Descripción del evento</label>
                        <textarea
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            rows={3}
                            cols={3}
                            placeholder="Ingresa una breve descripción del evento, que servicios vienen dentro del evento, especifica muy detalladamente..."
                            name="description"
                            value={input.description}
                            onChange={handleChange}
                            maxLength={500}
                            required></textarea>
                    </div>

                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Duración del evento</label>
                            <div className="flex flex-row">
                                <input
                                    type="time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingresa el nombre del evento"
                                    name="duration"
                                    value={input.duration}
                                    onChange={handleChange}
                                    required />
                                <select
                                    name="tiempo"
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue="" required>
                                    <option value="" disabled>Selecciona el tiempo</option>
                                    <option value="dias">dias</option>
                                    <option value="horas">horas</option>
                                    <option value="minutos">minutos</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Lugar del evento</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa la ciudad o lugar dónde ofreces el evento"
                                name="lugar"
                                value={input.lugar}
                                onChange={handleChange}
                                required />
                        </div>
                    </div>

                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Precio del evento</label>
                            <div className="flex flex-row items-center">
                                <input
                                    type="number"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingresa el precio del evento, el valor va en dólares"
                                    name="price"
                                    value={input.price}
                                    onChange={handleChange}
                                    required />
                                <p>USD.</p>
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Imagen del evento</label>
                            <div className="flex flex-row">
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Ingresa la url de una imagen para cargarla"
                                    name="image"
                                    value={input.image}
                                    onChange={handleChange} />
                                <button type="button" className="py-2 px-4 bg-green-500 text-white rounded mx-2" onClick={pushImage}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {
                        input.imagesEvent && input.imagesEvent.length > 0 ?
                            <div className="flex flex-col items-center my-10">
                                <p>Preview Image</p>
                                <img src={input.imagesEvent[0]} className="w-60 rounded-full object-cover" alt="Preview Image" />
                                <button type="button" onClick={() => setInput({ ...input, imagesEvent: [] })} className="py-2 px-4 my-5 bg-red-500 rounded text-white">Eliminar imagen</button>
                            </div> : ''
                    }

                    <div className="mb-6 text-center">
                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                            ¡Crear evento ahora!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}