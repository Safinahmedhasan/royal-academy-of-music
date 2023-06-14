import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const PaymentHistory = () => {
    const { user } = useContext(AuthContext);

    const [pay, setPay] = useState([])
    console.log(pay);



    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => setPay(data))
    }, [])

    return (
        <div>
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
                                        <th>Class Name</th>
                                        <th>Price</th>
                                        <th>Transaction Id</th>
                                        <th>Transaction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pay.map((payment, index) => (
                                        <tr key={payment._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {payment.name}
                                                <br />
                                            </td>
                                            <td>
                                                {payment.price}
                                                <br />
                                            </td>
                                            <td className='text-green-500'>
                                                {payment.transactionId}
                                                <br />
                                            </td>
                                            <td className='text-green-500'>
                                                Success
                                                <br />
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
        </div>
    );
};

export default PaymentHistory;