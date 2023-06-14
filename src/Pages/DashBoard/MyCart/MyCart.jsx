import React, { useEffect, useState } from 'react';
import UseCart from '../../../Hooks/UseCart/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cart, refetch] = UseCart();


  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this class?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://royel-music-academy-server-safinahmedhasan.vercel.app/carts/${item._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
            }
          })
          .catch(error => {
            console.error('Failed to delete class:', error);
          });
      }
    });
  };

  if (!Array.isArray(cart)) {
    return (
      <div>
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div>
      <div className='w-[900px] mt-20'>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='bg-green-500 text-white font-bold'>
                <th>
                  <p>#</p>
                </th>
                <th>Class</th>
                <th>Price</th>
                <th>Remove</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className='flex items-center space-x-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                          <img src={item.image} alt='Avatar Tailwind CSS Component' />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'>{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.price}
                    <br />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item)} className='btn btn-ghost btn-xs bg-red-500 text-white'>
                      <FaTrashAlt />
                      DELETE
                    </button>
                  </td>
                  <td>
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button className='btn btn-ghost btn-xs bg-blue-500 text-white'>
                        <MdOutlinePayment />
                        Pay
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
      <div className='mt-10 flex justify-between'>
      </div>
    </div>
  );
};

export default MyCart;
