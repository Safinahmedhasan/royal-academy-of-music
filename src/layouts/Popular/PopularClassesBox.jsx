import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PopularClassesBox = ({ items }) => {
    const { name, image, price, instructor, available_seats } = items;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = item => {
        console.log('object');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    };

    return (
        <div className=' ex-shadow group'>
            <div className=' hover:drop-shadow-2xl space-y-2'>
                <img md:width='300' height='100' className='rounded-lg transition group-hover:scale-105' src={image} alt="" />
                <h2 className='text-xl text-green-500 font-bold'>{name}</h2>
                <h2 className='text-base text-left'>Price: <span className='text-green-500'>{price}</span></h2>
                <h2 className='text-base text-left'>Instructor: <span className='text-green-500'>{instructor}</span></h2>
                <h2 className='text-base text-left'>Available Seats: <span className='text-green-500'>{available_seats}</span></h2>
            </div>
            {user ? (
                <button onClick={() => handleAddToCart(items)} className='btn btn-green-500 mt-10 bg-green-500 text-white hover:text-slate-700'>Select Class</button>
            ) : (
                <button disabled className='btn btn-green-500 mt-10 bg-green-500 text-white opacity-50 cursor-not-allowed'>Login To Select Class</button>
            )}
        </div>
    );
};

export default PopularClassesBox;
