import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Container from '../component/shared/Container/Container ';
import UseCart from '../Hooks/UseCart/UseCart';

const AdminInfo = () => {
    const { user, role } = useContext(AuthContext)
    const [cart] = UseCart();



    const [myClass, setMyClass] = useState([])
    useEffect(() => {
        fetch(`https://royel-music-academy-server-safinahmedhasan.vercel.app/myClass/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [])


    return (
        <div className='bg-green-100 p-10'>
            <Container>
                {user && role === 'instructor' && <div>
                    <div >
                        <h2 className="text-3xl">Hi, <span className=''>{user?.displayName}</span> WELCOME BACK</h2>
                        <div className='flex justify-center items-center flex-col'>
                            <div className='w-1/2 bg-orange-300 flex justify-center py-12 px-20 rounded-lg mt-10'>
                                <div>
                                    <img className='rounded-full w-80' src={user?.photoURL} alt="" />
                                    <h2 className='text-center mt-5 text-2xl'>{user?.displayName}</h2>
                                </div>
                            </div>
                            <div className='bg-green-300 w-1/2 flex justify-center flex-col rounded-xl'>
                                <h2 className='text-center mt-5 text-2xl'>Email: {user?.email}</h2>
                                <span className="text-center mt-5 text-2xl">Your Posted Class <p className='text-4xl  mb-10'>{myClass?.length || 0}</p></span>
                            </div>
                        </div>
                    </div>
                </div>}


                <div>
                    {user && role === 'student' && <div>
                        <div >
                            <h2 className="text-3xl">Hi, <span className=''>{user?.displayName}</span> WELCOME BACK</h2>
                            <div className='flex justify-center items-center flex-col'>
                                <div className='w-1/2 bg-orange-300 flex justify-center py-12 px-20 rounded-lg mt-10'>
                                    <div>
                                        <img className='rounded-full w-80' src={user?.photoURL} alt="" />
                                        <h2 className='text-center mt-5 text-2xl'>{user?.displayName}</h2>
                                    </div>
                                </div>
                                <div className='bg-green-300 w-1/2 flex justify-center flex-col rounded-xl'>
                                    <h2 className='text-center mt-5 text-2xl'>Email: {user?.email}</h2>
                                    <span className="text-center mt-5 text-2xl">Your Selected Class <p className='text-4xl  mb-10'>{cart?.length || 0}</p></span>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>


                {user && role === 'admin' && <div>
                        <div >
                            <h2 className="text-3xl">Hi, <span className=''>{user?.displayName}</span> WELCOME BACK</h2>
                            <div className='flex justify-center items-center flex-col'>
                                <div className='w-1/2 bg-orange-300 flex justify-center py-12 px-20 rounded-lg mt-10'>
                                    <div>
                                        <img className='rounded-full w-80' src={user?.photoURL} alt="" />
                                        <h2 className='text-center mt-5 text-2xl'>{user?.displayName}</h2>
                                    </div>
                                </div>
                                <div className='bg-green-300 w-1/2 flex justify-center flex-col rounded-xl'>
                                    <h2 className='text-center mt-5 text-2xl'>Email: {user?.email}</h2>
                                    <span className="text-center mt-5 text-2xl">Admin<p className='text-4xl  mb-10'></p></span>
                                </div>
                            </div>
                        </div>
                </div>}
            </Container>

        </div>
    );
};

export default AdminInfo;