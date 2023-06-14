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
        <div className='w-96 mx-auto mt-64'>
            <div >
                <div className='text-green-500 text-xl mb-2 '>
                    Class Price:$ <span className='text-rose-300'>{data.name}</span>
                </div>
                <div className='text-green-500 text-2xl mb-5 '>
                    Class Price:$ <span className='text-red-300'>{price}</span>
                </div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom data={data} price={data.price}></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment; 
