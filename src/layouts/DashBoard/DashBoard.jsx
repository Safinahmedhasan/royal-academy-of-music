import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBars, FaHome, FaSchool, FaWallet } from 'react-icons/fa';
import UseCart from '../../Hooks/UseCart/UseCart';
import './BashBoard.css'


const DashBoard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn bg-green-500 absolute left-5 top-5 drawer-button lg:hidden"><FaBars></FaBars></label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="p-10 w-80 ex-h text-base-content">
                        {/* Sidebar content here */}
                        <div className=' mx-auto -ml-1 bg-white p-10 rounded-lg  drop-shadow-2xl'>
                            <img className='ex-dashboard-profile' src={user?.photoURL} alt="" />
                            <h2 className='text-center mt-4 text-2xl text-green-500 font-bold'>{user?.displayName}</h2>
                        </div>
                        <div className='flex justify-center items-center '>
                            <div className='text-center'>


                                    <Link to='/dashboard/mycart'>  <p className='text-base hover:bg-white p-5 flex w-[350px] cursor-pointer'><FaSchool className='mr-5'></FaSchool>
                                        <div className="indicator">
                                            <span className=" badge bg-white text-green-500">+{cart?.length || 0}</span>
                                            <button className='ml-3'>My Selected Classes</button>
                                        </div>
                                    </p></Link>



                                <Link to='/dashboard/enroll'> <p className='text-base hover:bg-white p-5 flex w-[350px] cursor-pointer'><FaSchool className='mr-5'></FaSchool> My Enrolled Classes</p></Link>


                                <Link to='/dashboard/history'> <p className='text-base hover:bg-white p-5 flex w-[350px] cursor-pointer'><FaWallet className='mr-5'></FaWallet>Payment History</p></Link>

                                <Link to="/"><p className='text-base hover:bg-white p-5 flex w-[350px] cursor-pointer'><FaHome className='mr-5'></FaHome>Home</p></Link>

                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;