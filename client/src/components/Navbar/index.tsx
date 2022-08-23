import { Link, NavLink } from 'react-router-dom';
import Filters from "../Filters";
import Modal from "../Modal";

export default function Navbar() {

    const navLinkStyles = ({ isActive }: any) => {
        return {
            backgroundColor: isActive ? "#d1d5db" : "",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    return (
        <>
            <div className="w-full py-1 px-5 bg-white flex items-center fixed top-0 right-0 left-0 shadow lg:flex-row lg:flex-nowrap lg:justify-start" style={{ zIndex: '999' }}>
                <div className="w-full py-3 mx-auto flex items-center justify-between lg:flex-nowrap xl:max-w-screen-xl">
                    <Link to="/">
                        <p className="text-2xl text-gray-900 font-extrabold inline-block py-1.5 mr-4 leading-none whitespace-nowrap tracking-widest">Artist App</p>
                    </Link>
                    <div className="flex basis-auto flex-grow items-center">
                        <ul className="flex flex-row items-center ml-auto pl-0 list-none my-0">
                            <li className="mr-8">
                                <NavLink to="/artists" style={navLinkStyles} className="flex items-center text-gray-900 text-lg py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Artistas
                                </NavLink>
                            </li>

                            <li className="mr-8">
                                <NavLink to="/categories" style={navLinkStyles} className="flex items-center text-gray-900 text-lg py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg> Categorías
                                </NavLink>
                            </li>

                            <li className="mr-8">
                                <NavLink to="/contract" style={navLinkStyles} className="flex items-center text-gray-900 text-lg py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contratar
                                </NavLink>
                            </li>

                            <li className="mr-4">
                                <NavLink to='/login' style={navLinkStyles} className="flex items-center text-gray-900 text-lg py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Ingresar
                                </NavLink>
                            </li>

                            <li className="mr-8">
                                <p className="flex items-center text-lg py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <Modal textButton={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                    </svg>} titleHeader="Opciones de filtrado" bodyModal={<Filters />} />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}