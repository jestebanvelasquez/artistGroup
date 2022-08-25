import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Navbar from "../Navbar";
import { RUTA_APP } from "../..";

export default function Login() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            navigate('/dashboard');
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const loginResponse = await axios.post(`${RUTA_APP}users/login`, input)
            localStorage.setItem('auth-token', loginResponse.data.token);

            //Obtener los roles del usuario
            const roleResponse = await axios.get(`${RUTA_APP}users/role`, {
                headers: {
                    Authorization: `Bearer ${loginResponse.data.token}`
                }
            });

            var roles: string[] = [];
            roleResponse.data.map((rol: { roles: { nombre: string; }; }) => roles.push(rol.roles.nombre));

            localStorage.setItem('role', JSON.stringify(roles));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Te has logeado exitosamente.',
                showConfirmButton: false,
                timer: 1500
            });
            if (searchParams.get("contract") !== null && searchParams.get("eventId") !== null) {
                //Move to dashboard
                navigate(`/contract/event/${searchParams.get("eventId")}`);
            } else {
                //Move to dashboard
                navigate('/dashboard/');
            }
        } catch (error: any) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: true,
                timer: 5000
            });
        }
    }

    return (
        <section className="h-screen">
            <Navbar />
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <label>Correo electrónico</label>
                                <input type="text" name="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(e) => handleChange(e)} placeholder="Ingresa tu correo electrónico" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <label>Contraseña</label>
                                <input type="password" name="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(e) => handleChange(e)} placeholder="Ingresa tu contraseña" />
                            </div>

                            <div className="text-center lg:text-left">
                                <button type="submit" className="w-full inline-block px-10 py-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-700 active:scale-95 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 transition-colors duration-200">Ingresar</button>
                            </div>

                            <div className="text-center">
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">¿No tienes una cuenta?</p>
                                <Link to='/register' className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Registrate</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}