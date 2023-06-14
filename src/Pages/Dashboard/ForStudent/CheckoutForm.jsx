import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import useAuth from '../../../Hook/useAuth';
// import './CheckoutForm.css'

const CheckoutForm = ({ cart }) => {
    console.log(cart);
    // console.log(cart.price);
    // const price = cart?.price
    // console.log(price);
    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = UseAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        if (cart?.price > 0) {
            console.log(cart.price);
            axiosSecure.post('/create-payment-intent', { price: cart?.price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [cart.price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("error", error);
            toast.error(error.message)
        } else {
            console.log('payment method', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            toast.error(confirmError)
        }

        console.log(paymentIntent);

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            // setTransactionId(paymentIntent.id);
            const transactionId = paymentIntent.id;
            toast.success(transactionId)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: cart.price,
                date: new Date(),
                quantity: 1,
                cartItems: cart._id,
                status: 'Enrolled',
                item: cart.className,
                image: cart.image,
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        axiosSecure.patch(`/myClasses/enroll/${payment.cartItems}`)
                        console.log("response", res);
                        toast.success('data add successfully')
                        return res.data
                    }
                })
        }
    }

    // console.log(clientSecret);
    // console.log(stripe);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
                className="btn rounded-full btn-outline btn-primary px-10 btn-sm mt-4"
                type="submit"
                disabled={!stripe || !clientSecret || processing}
            >
                Pay
            </button>
        </form>

    );
};

export default CheckoutForm;