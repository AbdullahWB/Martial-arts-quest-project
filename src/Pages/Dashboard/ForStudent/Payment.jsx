import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_GetWay_PK)
const Payment = () => {
    const { id } = useParams()
    const [cart, setCart] = useState({})
    console.log(id);

    // console.log(price);

    useEffect(() => {
        fetch(`http://localhost:5000/payment/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCart(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    // const price = data?.price
    // console.log(price);

    return (
        <div>
            payment
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;