//@ts-nocheck
import React, { useState } from 'react'
import Navbar from '../components/Navbar/index'
import StripeCheckout from 'react-stripe-checkout'
import { Link, useParams } from 'react-router-dom';
// import dotenv from 'dotenv';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
// import { } from '../../redux/actions/Events';
import { getArtistDetail } from '../redux/actions/Artists';
import DetailBuy from './DetailBuy';

// dotenv.config();

export default function FormPago() {
    const dispatch = useAppDispatch()
    const params = useParams()
    const products = useAppSelector(state => state.events.detail)
    console.log(products);

    useEffect(() => {
        dispatch(getArtistDetail(params.id))//crear la accion!!

    }, [dispatch, params])

    
    const [product, setProduct] = useState({
        name: 'react',
        price: 100,
        productBy: 'fb'
    });

    const event = {
        "name": "Verdor lanzamiento",
        "description": "Nuevo album",
        "duration": 2,
        "imagesEvent": "https://tuboleta.com/imagenes/6243741199067.jpg",
        "lugar": "bogota",
        "price": 900.000,
        "tiempo": 1,
        "eventosCategorias": ["cine", "canto"]
    }


    const makePayment: string = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": 'application/json'
        }

        return fetch(`http://localhost:8282/payment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log('response', response)
            const { status } = response;
            console.log('status', status);
        })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Navbar />

            <DetailBuy event={event} />

            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}

                    <Link
                        //   className="App-link"
                        //   href="#"
                        //   target="_blank"
                        //   rel="noopener noreferrer"
                        to='/'
                    >
                    </Link>
                    <StripeCheckout
                        stripeKey={'pk_test_51LVJxNFxyyI2ycrMVBa0kGrOWlA39HwSydLbuRrmBU9iKf0jhXg8UINdP1v9CZCm0a3SyoQPsaI4cKT0XIwm2GNl00TRM4AHXL'}
                        token={makePayment}
                        name=''
                        opcion= 'hola'
                        amount={event.price}
                        shippingAddress
                        billingAddress
                    >
                        {/* <button> Buy react {event.price}</button> */}
                        <div className="flex flex-row justify-center">
                            {
                                // event.isActive ? <Link to={`/contract/event/:id`} className="px-10 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 active:scale-95 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200">Solicitar evento</Link> : 
                                <button className="px-10 py-2 mt-3 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-700 active:scale-95 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:cursor-not-allowed transition-colors duration-200" >
                                    comprar
                                </button>
                            }
                        </div>
                    </StripeCheckout>
                </header>
            </div>
        </div>
    )
}
