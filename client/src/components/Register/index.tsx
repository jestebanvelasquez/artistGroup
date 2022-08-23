import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import { useState } from 'react';
import { createUser, getAllUsers } from '../../redux/actions/Users';
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../redux/hooks/hooks';

export interface FormRegisterProps {
    name: string;
    lastname: string;
    city: string;
    country: string;
    email: string;
    password: string;
    isArtist: string;
    nameArtist: string;
    descriptionArtist?: string;
    imgArtist: string;
}

export default function Register() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState<FormRegisterProps>({
        name: '',
        lastname: '',
        city: '',
        country: '',
        email: '',
        password: '',
        isArtist: 'false',
        nameArtist: '',
        descriptionArtist: '',
        imgArtist: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            createUser(input)
                .then(() => {
                    //Me vuelva a cargar los usuarios
                    dispatch(getAllUsers());
                    //Redireccionar al login
                    navigate('/login');
                    //Restart values form
                    setInput({
                        name: '',
                        lastname: '',
                        city: '',
                        country: '',
                        email: '',
                        password: '',
                        isArtist: 'false',
                        nameArtist: '',
                        descriptionArtist: '',
                        imgArtist: ''
                    })
                }).catch(error => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: error.response.data.error,
                        showConfirmButton: true,
                        timer: 5000
                    });
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-2/3 mx-auto bg-white p-16">
            <Navbar />
            <div className="container">
                <p className="text-4xl text-center font-bold mb-5">Registrarme</p>
                <p className="text-xl font-extralight text-justify mb-5">
                    En esta sección podrás crear tu cuenta para poder contratar a nuestros artistas, además de poder acceder al panel administrativo dónde podrás mirar algunas funcionalidades extras, llena el siguiente formulario y comienza a explorar.
                </p>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <p className="text-lg font-extralight underline mb-3">Información personal</p>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Nombres</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa tu nombre"
                                name="name"
                                value={input.name}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Apellidos</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa tu apellido"
                                name="lastname"
                                value={input.lastname}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Ciudad</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa tu ciudad"
                                name="city"
                                value={input.city}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">País</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa tu país"
                                name="country"
                                value={input.country}
                                onChange={handleChange}
                                required />
                        </div>
                    </div>
                    <p className="text-lg font-extralight underline mb-3">Información de acceso</p>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresa tu correo electrónico"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                            <input
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="•••••••••"
                                name="password"
                                value={input.password}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Confirmar contraseña</label>
                            <input
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="•••••••••"
                                name="password"
                                value={input.password}
                                onChange={handleChange}
                                required />
                        </div>
                    </div>
                    <p className="text-lg font-extralight text-center mb-3">¿Deseas registrarte cómo un artista?</p>
                    <select
                        name="isArtist"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue="" required>
                        <option value="" disabled>Seleccionar una opción</option>
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                    {
                        input.isArtist === 'true' ? <>
                            <div className="grid gap-6 my-5 lg:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Nombre del artista</label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Ingresa tu nombre artístico"
                                        name="nameArtist"
                                        value={input.nameArtist}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Imagen del artista</label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Ingresa la url de la imagen"
                                        name="imgArtist"
                                        value={input.imgArtist}
                                        onChange={handleChange}
                                        required />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Descripción del artista (opcional)</label>
                                <textarea
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    rows={3}
                                    cols={3}
                                    placeholder="Ingresa una descripción, puedes expresar los servicios qué ofreces o qué generos musicales interpretas..."
                                    name="descriptionArtist"
                                    value={input.descriptionArtist}
                                    onChange={handleChange}
                                    maxLength={500}></textarea>
                            </div>
                        </> : ''
                    }
                    <div className="flex items-start my-6">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required />
                        </div>
                        <label className="ml-2 text-sm font-medium text-gray-900">Estoy de acuerdo con los  <Link to="#" className="text-red-600 hover:underline dark:text-red-500">terminos y condiciones</Link>.</label>
                    </div>
                    <div className="mb-6 text-center">
                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                            ¡Registrarme Ahora!
                        </button>
                    </div>
                    <div className="text-center">
                        <Link to='/login' className="inline-block text-sm text-red-500 font-semibold align-baseline hover:text-blue-800">
                            ¿Ya tienes una cuenta? Ingresa!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}




