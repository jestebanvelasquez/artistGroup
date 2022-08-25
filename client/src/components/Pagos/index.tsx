import axios from "axios";
import { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import Navbar from "../Navbar";

export default function Pagos() {
    const publisableKey = 'pk_test_51LaAJaDDoZGULOzGUzodJRKd2tfqjCeHAa01Qp19gjsP2Xn3ASdAhTto2OmfHCFgimsAr2b0YfrAbVUqpCeoXYi400V36CI2W6'

    const [artist, setArtist] = useState({
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYgeiivNE-anUqExkuhJ4kjFxrUj1W7k47A&usqp=CAU',
        nickName: 'Fredie Mercury',
        price: 35
    });

    const priceForStripe = artist.price * 100;

    const payNow = async (token: any) => {
        try {
            const response = await axios.post('http://localhost:4000/payment', {
                amount: artist.price * 100,
                token
            });

            if (response.status === 200) {
                console.log('Your payment was successful');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <p className="font-bold">Image</p>
                <img src={artist.image} width={300} alt="" />
                <p className="font-bold">Artist Name</p>
                {artist.nickName}
                <p className="font-bold">Artist Price</p>
                {artist.price}


                <StripeCheckout
                    stripeKey={publisableKey}
                    label="Pay Now"
                    name="Pay With Credit Card"
                    billingAddress
                    shippingAddress
                    amount={priceForStripe}
                    description={`Your total is $${artist.price}`}
                    token={payNow} />
            </div>
        </>
    )
}

