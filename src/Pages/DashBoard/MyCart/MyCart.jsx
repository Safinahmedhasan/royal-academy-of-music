import React from 'react';
import UseCart from '../../../Hooks/UseCart/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
   
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are You Sure Delete This Class",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Class has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    return (
        <div>
            <div className='w-[900px] mt-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-green-500 text-white font-bold'>
                                <th>
                                    <p>#</p>
                                </th>
                                <th>Class</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.price}
                                        <br />
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-red-500 text-white"><FaTrashAlt></FaTrashAlt> DELETE</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            </div>
            <div className='mt-10 flex justify-between'>
                <p className='font-bold text-green-500 text-xl'>Total Classes Price: {total}</p>
                <button className="btn btn-outline btn-accent">Payment</button>

            </div>
        </div>
    );
};

export default MyCart;