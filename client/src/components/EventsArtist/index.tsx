import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getEventsByIdArtist } from "../../redux/actions/Events";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { EventosCategoria, EventsArtist } from "../../redux/reducer/artistSlice";
import { RootState } from "../../redux/store/store";

interface EventsArtistProps {
    idArtist: string;
}

export default function EventsArtistView({ idArtist }: EventsArtistProps) {
    const dispatch = useAppDispatch();
    const eventos = useAppSelector((state: RootState) => state.artists.events);
    useEffect(() => {
        dispatch(getEventsByIdArtist(idArtist));
    }, [dispatch, idArtist]);

    return (
        <>
            <p className="text-center text-5xl font-extrabold">Eventos ofrecidos por el artista</p>
            {
                eventos && eventos.length > 0 ? <>
                    <div className="flex flex-row flex-wrap">
                        {eventos.map((event: EventsArtist) => {
                            return (
                                <div key={event.id} className="flex flex-row flex-wrap w-1/3">
                                    <div className="flex flex-col items-center w-full m-9 bg-white rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                                        <div className="w-full h-80">
                                            <img src={event.imagesEvent[0]} className="w-full h-full p-7" alt="" />
                                        </div>
                                        <div className="flex flex-col w-full h-full p-7">
                                            <div className="mb-5">
                                                <p className="text-3xl font-extrabold">Nombre del evento</p>
                                                <p className="text-2xl font-light">{event.name}</p>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Descripción del evento</p>
                                                <p>{event.description !== '' ? event.description : 'No hay una descripción'}</p>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Categorias del evento</p>
                                                <ul className="list-disc ml-3">
                                                    {event.eventosCategorias.map((category: EventosCategoria) => {
                                                        return (
                                                            <li key={category.categorias.id}>{category.categorias.name}</li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Estado del evento</p>
                                                <p>{event.isActive ? <strong className="text-green-500">Activo</strong> : <strong className="text-red-500">Inactivo</strong>}</p>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Lugar del evento</p>
                                                <p>{event.lugar}</p>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Precio del evento</p>
                                                <p>${event.price} USD.</p>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Tiempo del evento</p>
                                                <p>{event.duration} {event.tiempo}</p>
                                            </div>
                                            <div className="flex flex-row justify-center">
                                                {
                                                    event.isActive ? <Link to={`/contract/event/${event.id}`} className="px-10 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Solicitar evento</Link> : <button className="px-10 py-2 mt-3 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-700 active:scale-95 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200" disabled>Este evento no está disponible</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </> : <div className="flex flex-col items-center my-10">
                    <p className="text-4xl font-light">Este artista no tiene eventos disponibles</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-36 w-36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            }
        </>
    )
}