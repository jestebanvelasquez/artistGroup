//@ts-nocheck

import React from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';

const product = {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYgeiivNE-anUqExkuhJ4kjFxrUj1W7k47A&usqp=CAU',
    nickName: 'freddie mercury',
    price: 20000
}

const stripePromise = loadStripe('pk_test_51LXBx3EGSW984RrTu9Bj4VyDTBeLoMjcdsPvPfLmwlBWSaqVw25q1Tnapnd1Aa5o136zOLY9BPfGJpr8G2Am3j6s00Fbw84ctZ')

//chekear formulario
const CheckoutForm = () => {

    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        //capturar la data de la tarjeta.input

        try {
            const { err, paymentMethod } = await stripe?.createPaymentMethod({
                type: 'card',
                card: elements?.getElement(CardElement)
            })
            if (paymentMethod) {
                const { id } = paymentMethod
                const { data } = await axios.post(`${RUTA_APP}buy`, {
                    id,
                    amount: product.price
                })
                // console.log(data);
                if (data.success) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: data.success,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')

                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: data.message,
                        showConfirmButton: true,

                    })
                }
            }
        } catch (err) {
            console.log(err);
        }

    }




    return <form action="" onSubmit={handleSubmit} className='card card-body' >
        <img src={product.image} alt="product" className='img-fluid' />
        <h1 className='text-center my-2'>name artist: {product.nickName}</h1>
        <h1 className='text-center my-2'>price ${product.price}</h1>

        <div className='form-group'>
            <CardElement className='form-control' />
        </div>
        <button className='btn btn-success'>
            Buy
        </button>
    </form>
}


export default function Pagos() {
    return (
        <Elements stripe={stripePromise}>
            <Navbar />
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    )
}

