import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { LoginUser } from "../../redux/actions/users";

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(LoginUser(input));
        navigate('/adminPanel/');
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