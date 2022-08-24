//@ts-nocheck
import { Link } from "react-router-dom";
import { Evento } from "../../redux/reducer/artistSlice";

type EventsArtistProps = {
    eventos: Evento[]
}
interface Event {
    id: string,
    name:string,
    imagesEvent: string,
    description:string,
    isActive:boolean,
    price:string,
    lugar:string,
    duration:string,
    tiempo:string,



}

export default function DetailBuy( {event} ) {

    
    return (
        <>
            <p className="text-center text-5xl font-extrabold">Evento A Contratar</p>
            {/* { */}
                {/* os && os.length > 0 ? <> */}
                    <div className="flex flex-col flex-wrap content-center">
                        {/* {os.map( => { */}
                            {/* return ( */}
                                <div key={event.id} className="flex flex-row flex-wrap w-1/3 content-center">
                                    <div className="flex flex-col items-center w-full m-9 bg-white rounded-md shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                                        <div className="w-full h-80">
                                            <img src={event.imagesEvent} className="w-full h-full p-7" alt="" />
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
                                            {/* <div className="mb-5">
                                                <p className="text-xl font-extrabold">Categorias del evento</p>
                                                <ul className="list-disc ml-3">
                                                    {event.eventosCategorias.map(category => {
                                                        return (
                                                            <li key={category.idCategoria}>{category.categorias.name}</li>
                                                        );
                                                    })}
                                                </ul>
                                            </div> */}
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
                                                <p>${event.price} COP.</p>
                                            </div>
                                            <div className="mb-5">
                                                <p className="text-xl font-extrabold">Tiempo del evento</p>
                                                <p>{event.duration} {event.tiempo}</p>
                                            </div>
                                            {/* <div className="flex flex-row justify-center">
                                                {
                                                    event.isActive ? <Link to={`/contract/event/:id`} className="px-10 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Solicitar evento</Link> : <button className="px-10 py-2 mt-3 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-700 active:scale-95 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200" disabled>Este evento no está disponible</button>
                                                }
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            {/* ) */}
                        {/* })} */}
                    </div>
        </>
    )
}