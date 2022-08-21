//@ts-nocheck
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import { useState } from 'react';
//import { useAppDispatch } from '../../redux/hooks/hooks';
import axios from 'axios';
//import {getRole} from '../../redux/reducer/usersSlice'
import Swal from 'sweetalert2';

export default function CreateFormRe() {
    //const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        userName: '',
        lastName: '',
        city: '',
        country: '',
        email: '',
        password: '',
        rol: ''
    })
    console.log(input);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }




    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios({
                url: 'http://localhost:4000/signup',
                method: 'POST',
                data: input

            })
            console.log(response);
            //dispatch(getRole(response.data))
            localStorage.setItem('auth-token', response.data.token);
            localStorage.setItem('role', response.data.rol)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `El Videojuego ${input.email} logeado correctamente`,
                showConfirmButton: false,
                timer: 1500
            })
            setInput({

            })
            if (response.data.rol === 'ARTIST') {
                navigate('/createartist')
            }
        } catch (error) {
            // Swal.fire(error.response.data.error)
            console.log(error);
        }
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-16">
            <Navbar />
            <form className="container" onSubmit={(e) => handleSubmit(e)} >
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label
                            htmlFor="userName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                        <input
                            type="text"
                            id="userName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Angie"
                            name="userName"
                            value={input.userName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
                        <input
                            type="text"
                            id="lastName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Perdomo"
                            name="lastName"
                            value={input.lastName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
                        <input
                            type="text"
                            id="city"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bogota"
                            name="city"
                            value={input.city}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <label
                            htmlFor="country"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pais</label>
                        <input
                            type="text"
                            id="country"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Colombia"
                            name="country"
                            value={input.country}
                            onChange={handleChange}
                            required />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="angie.perdomo@company.com"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmar contraseña</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                        required />
                </div>

                <select
                    id="roles"
                    name="rol"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="ARTIST">Artista</option>
                    <option value="CONTRACTOR">Usuario Contratista</option>
                </select>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Estoy de acuerdo con los  <Link to="#" className="text-red-600 hover:underline dark:text-red-500">terminos y condiciones</Link>.</label>
                </div>
                <div className="mb-6 text-center">
                    <button
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Registrar cuenta
                    </button>
                </div>
                <div className="text-center">
                    <Link to='/login' className="inline-block text-sm text-red-500 font-semibold align-baseline hover:text-blue-800">
                        ¿Ya tienes una cuenta? Ingresa!
                    </Link>
                </div>
            </form>
        </div>
    )
}




