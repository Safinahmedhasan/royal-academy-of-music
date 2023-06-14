import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
    // DD

    // DD

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://royel-music-academy-server-safinahmedhasan.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`https://royel-music-academy-server-safinahmedhasan.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    
    const handleMakeInstructor = user => {
        fetch(`https://royel-music-academy-server-safinahmedhasan.vercel.app/users/Instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            {users.length}
            <div className="overflow-x-auto mt-20 px-5">
                <table className="table md:w-[950px]">
                    {/* head */}
                    <thead className='bg-green-500 text-slate-100'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        {/* <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.imageUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                    <br />
                                </td>
                                <td>
                                    <span className='bg-red-500 px-5 py-2 text-white rounded-xl'>
                                        {user.role}
                                    </span>
                                </td>
                                <td>{
                                    user.role === 'instructor' ? 'Instructor' : <button onClick={() => handleMakeInstructor(user)} className='bg-green-500 hover:bg-green-700 px-5 py-2 text-white rounded-xl'>
                                        Make Instructor
                                    </button>
                                }</td>
                                <td>{
                                    user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className='bg-green-500 hover:bg-green-700 px-5 py-2 text-white rounded-xl'>
                                        Make Admin
                                    </button>
                                }</td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;