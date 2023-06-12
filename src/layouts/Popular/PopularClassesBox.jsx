import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseCart from '../../Hooks/UseCart/UseCart';
import { Fade } from 'react-awesome-reveal';

const PopularClassesBox = ({ item }) => {
    const { name, image, price, Instructor, seats, _id } = item;
    const { user, role } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = UseCart();

    const handleAddToCart = item => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, price, image, seats, email: user.email }
            fetch(`${import.meta.env.VITE_API_URL}/carts`, {
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

        <div>
            <Fade direction="up" delay={500} triggerOnce>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} className='h-80 w-96' alt="Instructor" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>Price: ${price}</p>
                        <p>Instructor Name:{Instructor}</p>
                        <p>Seats:{seats}</p>
                        <div className="card-actions justify-end">
                            <button
                                disabled={role === 'admin' || role === 'instructor'}
                                onClick={() => handleAddToCart(item)}
                                className='btn btn-green-500 mt-10 bg-green-500 text-white hover:text-slate-700'
                            >
                                Select Class
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PopularClassesBox;
