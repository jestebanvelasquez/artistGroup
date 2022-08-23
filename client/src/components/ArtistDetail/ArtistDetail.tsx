import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArtistDetail } from '../../redux/actions/Artists';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import EventsArtist from '../EventsArtist';

import Navbar from '../Navbar';

export default function ArtistDetail() {
    const dispatch = useAppDispatch();
    const detailState = useAppSelector((state: RootState) => state.artists.detail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getArtistDetail(String(id)));
    }, [dispatch]);

    return (
        <div>
            <Navbar />

            {(detailState && detailState.length > 0) ? <>
                <div className="container flex flex-col items-center w-full h-screen">
                    <div className="flex flex-row items-center justify-center w-full h-full">
                        <div className="relative flex flex-row bg-gray-50 shadow-2xl rounded-lg w-4/5 p-10">
                            <Link to='/artists' className="absolute flex items-center w-10 h-10 right-4 top-4 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Link>
                            <div className="flex flex-row items-center justify-center w-1/2">
                                <div className="w-full h-96">
                                    <img src={detailState[0].img} className="object-contain w-full h-full rounded-full" alt="" />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="mb-5">
                                    <p className="text-3xl font-extrabold">Nombre del artista</p>
                                    <p className="text-2xl font-light">{detailState[0].name}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-xl font-extrabold">Descripción del artista</p>
                                    <p>{detailState[0].descripcion !== null ? detailState[0].descripcion : 'No hay una descripción'}</p>
                                </div>
                                <div className="mb-5 flex flex-row items-center justify-between">
                                    <div>
                                        <p className="text-xl font-extrabold">Nacionalidad</p>
                                        <p className="text-base font-light">{detailState[0].usuario.persona.city} - {detailState[0].usuario.persona.country}</p>
                                    </div>
                                    <div>
                                        <button className="flex flex-row items-center justify-center px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Me interesa <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EventsArtist eventos={detailState[0].eventos} />
            </> : ''}
        </div>
    )
}