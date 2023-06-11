import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseCart from '../../Hooks/UseCart/UseCart';

const PopularClassesBox = ({ item }) => {
    const { name, image, price, Instructor, seats, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = UseCart();

    const handleAddToCart = item => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, price, image, seats, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <div className=' ex-shadow group'>
            <div className=' hover:drop-shadow-2xl space-y-2'>
                <img md:width='300' height='100' className='rounded-lg transition group-hover:scale-105' src={image} alt="" />
                <h2 className='text-xl text-green-500 font-bold'>{name}</h2>
                <h2 className='text-base text-left'>Price: <span className='text-green-500'>{price}</span></h2>
                <h2 className='text-base text-left'>Instructor: <span className='text-green-500'>{Instructor}</span></h2>
                <h2 className='text-base text-left'>Available Seats: <span className='text-green-500'>{seats}</span></h2>
            </div>
            <button onClick={() => handleAddToCart(item)} className='btn btn-green-500 mt-10 bg-green-500 text-white hover:text-slate-700'>Select Class</button>
        </div>
    );
};

export default PopularClassesBox;
