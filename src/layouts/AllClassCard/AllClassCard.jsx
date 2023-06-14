import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';

const AllClassCard = () => {

    const [allClass, setAllClass] = useState([]);
    const feedback = useLoaderData();


    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setAllClass(data);
            })
    }, [])


    const handleMakeDenyf = user => {
        Swal.fire({
            title: 'Deny',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'FeedBack',
            showLoaderOnConfirm: true,
            preConfirm: (input) => {
                console.log(input);
                fetch(`https://royel-music-academy-server-safinahmedhasan.vercel.app/class/deny/${user._id}`, {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(input)
                })
                    .then(res => res.json())
                    .then(data => {

                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'update',
                })
            }
        })
    }


    const handleMakeDeny = user => {
        fetch(`http://localhost:5000/class/deny/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'is an Admin Now',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeApprove = user => {
        fetch(`http://localhost:5000/class/approve/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'is an Admin Now',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }




    return (
        <div>
            <div>
                {allClass.length}
            </div>
            <div className="overflow-x-auto mt-20 px-5">
                <table className="table md:w-[950px]">
                    {/* head */}
                    <thead className='bg-green-500 text-slate-100'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>name</th>
                            <th>Instructor</th>
                            <th></th>
                            <th></th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClass.map((allClass, index) => <tr
                                key={allClass._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={allClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{allClass.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {allClass.Instructor}
                                    <br />
                                </td>
                                <td>
                                    {allClass.email}
                                    <br />
                                </td>

                                <td>
                                    <span className='bg-red-500 px-5 py-2 text-white rounded-xl'>
                                        {
                                            allClass.status ? allClass.status : 'Pending'
                                        }
                                    </span>
                                </td>

                                <td>
                                    <button disabled={allClass.status === 'deny' ? true : false} className='btn' onClick={() => handleMakeDeny(allClass)}>
                                        Deny
                                    </button>
                                </td>
                                <td>
                                    <button disabled={allClass.status === 'Approve' ? true : false} className='btn' onClick={() => handleMakeApprove(allClass)}>
                                        Approve
                                    </button>
                                </td>
                                <td>
                                <Link to={`/dashboard/feedback/${allClass._id}`}><button className='bg-yellow-500 text-white px-7 py-2 -mt-16 rounded-lg'>feedback</button></Link>
                                </td>

                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllClassCard;