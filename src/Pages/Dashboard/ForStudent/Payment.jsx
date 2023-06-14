import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import Title from '../../../Components/Title';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_GetWay_PK)
const Payment = () => {
    const { id } = useParams()
    const [cart, setCart] = useState({})
    console.log(id);

    // console.log(price);

    useEffect(() => {
        fetch(`https://summer-camp-server-ochre.vercel.app/payment/${id}`)
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
            <Title
                extraTitle={"Manage your payment"}
                title={"Here you make your payment"}
                subtitle={"Join us at Martial Arts Academy and embark on a transformative journey of self-discovery, empowerment, and martial arts excellence. Unleash your potential, cultivate your mind-body connection, and become the best version of yourself."}
            />
            <div className='w-[50%] mx-auto mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;