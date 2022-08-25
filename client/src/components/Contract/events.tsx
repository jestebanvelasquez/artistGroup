import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../../redux/actions/Events";
import { ContractEvent } from "../../redux/reducer/artistSlice";
import Swal from "sweetalert2";
import { RUTA_APP } from "../..";
import { getUserByToken } from "../../redux/actions/Users";
import { Usuario } from "../../redux/reducer/usersSlice";

export default function ContractEvents() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [event, setEvent] = useState<ContractEvent[]>();
    const [user, setUser] = useState<Usuario[]>();
    const [input, setInput] = useState({
        direccion: '',
        //fechaEvento: '',
        //horario: ''
    });

    useEffect(() => {
        let tokenComprador = localStorage?.getItem('auth-token');
        if (tokenComprador) {
            getEventById(String(id))
                .then(response => {
                    //Valido que el evento esté activo
                    if (response[0].isActive) {
                        //Valido que el usuario del artista esté activo
                        if (response[0].artista.usuario.isAvaliable) {
                            setEvent(response);
                            //Obtener al usuario que realiza la compra con el token
                            getUserByToken()
                                .then((user: Usuario[]) => {
                                    //Valido que el usuario que hace la compra esté habilitado
                                    if (user[0].isAvaliable) {
                                        setUser(user);
                                    } else {
                                        navigate('/contract');
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'La cuenta del que está realizando la compra se cuentra deshabilitada',
                                            showConfirmButton: true
                                        });
                                    }
                                }).catch(error => {
                                    console.log(error);
                                })
                        } else {
                            navigate('/contract');
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'El evento se encuentra disponible, pero el Artista tiene su cuenta deshabilitada',
                                showConfirmButton: true
                            });
                        }
                    } else {
                        navigate('/contract');
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'El evento no se encuentra disponible',
                            showConfirmButton: true
                        });
                    }
                }).catch(error => {
                    navigate('/contract');
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: error.response.data.message,
                        showConfirmButton: true
                    });
                });
        } else {
            navigate(`/login?contract=true&eventId=${id}`);
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Para poder realizar una compra de un evento, tienes que crear una cuenta o inicia sesión.',
                showConfirmButton: true
            });
        }
    }, [id, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const publisableKey = 'pk_test_51LaAJaDDoZGULOzGUzodJRKd2tfqjCeHAa01Qp19gjsP2Xn3ASdAhTto2OmfHCFgimsAr2b0YfrAbVUqpCeoXYi400V36CI2W6';
    const payNow = async (token: any) => {
        try {
            if (event) {
                const response = await axios.post(`${RUTA_APP}payment`, {
                    idComprador: user![0].id,
                    idEvento: event[0].id,
                    direccion: input.direccion,
                    correoComprador: user![0].email,
                    correoVendedor: event[0].artista.usuario.email,
                    amount: event[0].price * 100,
                    token
                });

                if (response.status === 200) {
                    navigate('/contract');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'La compra se ha realizado con exito, te hemos enviado un correo con la información.',
                        showConfirmButton: true
                    });
                }else{
                    navigate('/contract');
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Ocurrió un error al realizar la compra del evento.',
                            showConfirmButton: true
                        });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                {
                    event && event.length > 0 && user && user.length > 0 ?
                        <>
                            <div className="flex flex-row">
                                <div className="flex flex-row w-1/2">
                                    <div className="flex flex-col w-1/2 items-center justify-center">
                                        <p className="text-3xl font-extralight underline text-center my-10">Información del evento</p>
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Nombre del evento</p>
                                        <p className="text-lg font-bold mb-3">{event[0].name}</p>
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Lugar del evento</p>
                                        <p className="text-lg font-bold mb-3">{event[0].lugar}</p>
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Duración del evento</p>
                                        <p className="text-lg font-bold mb-3">{event[0].duration} {event[0].tiempo}</p>
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Precio del evento</p>
                                        <p className="text-lg font-bold mb-3">{event[0].price} USD.</p>
                                    </div>
                                    <div className="flex flex-col w-1/2 items-center">
                                        <img src={event[0].artista.img} className="w-96 my-10 rounded-full" alt="Imagen del artista" />
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Nombre del artista</p>
                                        <p className="text-lg font-bold mb-3">{event[0].artista.name}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <p className="text-3xl font-extralight underline text-center my-10">Información personal</p>
                                    <div className="mx-20">
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Nombres del cliente</p>
                                        <p className="text-lg font-bold mb-3">{user[0].persona.name} {user[0].persona.lastname}</p>
                                        <p className="block mb-1 text-sm font-medium text-gray-900">Dirección del domicilio</p>
                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Ingresa la dirección dónde quieres el evento, sé específico"
                                            name="direccion"
                                            value={input.direccion}
                                            onChange={handleChange}
                                            required />
                                        {/* <p className="block mb-1 text-sm font-medium text-gray-900">Selecciona en que fecha quieres el evento</p>
                                        <div className="flex flex-row">
                                            <input
                                                type="datetime-local"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                name="fechaEvento"
                                                value={input.fechaEvento}
                                                onChange={handleChange}
                                                required />
                                            <select
                                                name="horario"
                                                onChange={handleChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                defaultValue="" required>
                                                <option value="" disabled>Selecciona un horario</option>
                                                <option value="am">AM</option>
                                                <option value="pm">PM</option>
                                            </select>
                                        </div> */}
                                        <div className="flex flex-row justify-center my-5">
                                            {/* <button className="py-2 px-4 text-white bg-green-500 rounded my-5">Validar disponibilidad</button> */}
                                            <StripeCheckout
                                                stripeKey={publisableKey}
                                                label="Contratar Evento"
                                                name="Paga con tarjeta de crédito"
                                                amount={event[0].price * 100}
                                                description={`Tu total es: $${event[0].price}`}
                                                token={payNow} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> : ''
                }
            </div>
        </>
    )
}