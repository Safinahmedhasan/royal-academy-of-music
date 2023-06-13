import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const data = useLoaderData();
    

    return (
        <div>
            {data._id}
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment; 
