import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const data = useLoaderData();

    const price = parseFloat(data.price)
    

    return (
        <div>
            {data._id} <br />
            {price}
            <Elements stripe={stripePromise}>
                <CheckOutFrom data={data} price={data.price}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment; 
