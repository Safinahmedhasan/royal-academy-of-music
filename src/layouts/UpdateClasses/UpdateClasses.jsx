import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClasses = () => {
    const classData = useLoaderData();
    const { _id, price, seats, name } = classData;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const updatedName = form.name.value;
        const updatedSeats = form.seats.value;
        const updatedPrice = form.price.value;

        const updateClass = {
            name: updatedName,
            seats: updatedSeats,
            price: updatedPrice
        };

        fetch(`http://localhost:5000/class/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Update Success',
                        icon: 'success',
                        confirmButtonText: 'Update'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
                <p className='text-2xl mb-32'>Update Class</p>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='location' className='block text-gray-600'>
                                    Class name
                                </label>
                                <input
                                    defaultValue={name}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                    name='name'
                                    id='name'
                                    type='text'
                                    placeholder='Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='flex justify-between gap-2'>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='price' className='block text-gray-600'>
                                        Price
                                    </label>
                                    <input
                                        defaultValue={price}
                                        className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                        name='price'
                                        id='price'
                                        type='number'
                                        placeholder='Price'
                                        required
                                    />
                                </div>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='guest' className='block text-gray-600'>
                                        Available seats
                                    </label>
                                    <input
                                        defaultValue={seats}
                                        className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                        name='seats'
                                        id='seats'
                                        type='number'
                                        placeholder='Available seats'
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-green-500'
                    >
                        Update Class
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateClasses;
