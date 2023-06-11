import React, { useContext, useState } from 'react';
// import Logo from '../Shared/Navbar/Logo'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logOut, role } = useContext(AuthContext)
    console.log(role);

    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }

    return (
        <>
            <div>

                {/* Instructor Route */}

                {user && role === 'instructor' && <div>
                    <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                        <div>
                            <div className='block cursor-pointer p-4 font-bold'>
                                {/* <Logo /> */}
                            </div>
                        </div>

                        <button
                            onClick={handleToggle}
                            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                        >
                            <AiOutlineBars className='h-5 w-5' />
                        </button>
                    </div>



                    {/* Sidebar */}
                    <div
                        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                            }  md:translate-x-0  transition duration-200 ease-in-out`}
                    >
                        <div>
                            {/* Branding & Profile Info */}
                            <div>
                                <div className='w-full hidden text-2xl md:flex py-2 justify-center items-center bg-green-100 mx-auto'>
                                    <p>Instructor</p>
                                </div>
                                <div className='flex flex-col items-center mt-6 -mx-2'>
                                    <Link to='/dashboard'>
                                        <img
                                            className='object-cover w-24 h-24 mx-2 rounded-full'
                                            src={user?.photoURL}
                                            alt='avatar'
                                            referrerPolicy='no-referrer'
                                        />
                                    </Link>
                                    <Link to='/dashboard'>
                                        <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                            {user?.displayName}
                                        </h4>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                            {user?.email}
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className='flex flex-col justify-between flex-1 mt-6'>
                                <nav>
                                    <>
                                        {/* Menu Links */}




                                        <NavLink
                                            to='add-room'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>Add a Class</span>
                                        </NavLink>

                                        <NavLink
                                            to='InstructorMyClass'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>My Classes</span>
                                        </NavLink>


                                        <NavLink
                                            to='myClasse'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>Total Enrolled Students</span>
                                        </NavLink>
                                    </>
                                </nav>
                            </div>
                        </div>

                        <div>
                            <hr />
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <FcSettings className='w-5 h-5' />

                                <span className='mx-4 font-medium'>HOME</span>
                            </NavLink>
                            <button
                                onClick={handleLogOut}
                                className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                            >
                                <GrLogout className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>}


                {/* Student Route */}
                {user && role === 'student' && <div>
                    <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                        <div>
                            <div className='block cursor-pointer p-4 font-bold'>
                                {/* <Logo /> */}
                            </div>
                        </div>

                        <button
                            onClick={handleToggle}
                            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                        >
                            <AiOutlineBars className='h-5 w-5' />
                        </button>
                    </div>
                    {/* Sidebar */}
                    <div
                        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                            }  md:translate-x-0  transition duration-200 ease-in-out`}
                    >
                        <div>
                            {/* Branding & Profile Info */}
                            <div>
                                <div className='w-full hidden text-2xl md:flex py-2 justify-center items-center bg-green-100 mx-auto'>
                                    <p>Student</p>
                                </div>
                                <div className='flex flex-col items-center mt-6 -mx-2'>
                                    <Link to='/dashboard'>
                                        <img
                                            className='object-cover w-24 h-24 mx-2 rounded-full'
                                            src={user?.photoURL}
                                            alt='avatar'
                                            referrerPolicy='no-referrer'
                                        />
                                    </Link>
                                    <Link to='/dashboard'>
                                        <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                            {user?.displayName}
                                        </h4>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                            {user?.email}
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className='flex flex-col justify-between flex-1 mt-6'>
                                <nav>
                                    <>
                                        {/* Menu Links */}




                                        <NavLink
                                            to='myClasses'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>My Selected Classes</span>
                                        </NavLink>

                                        <NavLink
                                            to='add-room'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>My Enrolled Classes</span>
                                        </NavLink>


                                        <NavLink
                                            to='payment'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>Payment History</span>
                                        </NavLink>
                                    </>
                                </nav>
                            </div>
                        </div>

                        <div>
                            <hr />
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <FcSettings className='w-5 h-5' />

                                <span className='mx-4 font-medium'>HOME</span>
                            </NavLink>
                            <button
                                onClick={handleLogOut}
                                className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                            >
                                <GrLogout className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Logout</span>
                            </button>
                        </div>
                    </div>


                </div>}




                {/* ADMIN PANEL */}
                {user && role === 'admin' && <div>

                    <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                        <div>
                            <div className='block cursor-pointer p-4 font-bold'>
                                {/* <Logo /> */}
                            </div>
                        </div>

                        <button
                            onClick={handleToggle}
                            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                        >
                            <AiOutlineBars className='h-5 w-5' />
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div
                        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                            }  md:translate-x-0  transition duration-200 ease-in-out`}
                    >
                        <div>
                            {/* Branding & Profile Info */}
                            <div>
                                <div className='w-full hidden text-2xl md:flex py-2 justify-center items-center bg-green-100 mx-auto'>
                                    <p>ADMIN</p>
                                </div>
                                <div className='flex flex-col items-center mt-6 -mx-2'>
                                    <Link to='/dashboard'>
                                        <img
                                            className='object-cover w-24 h-24 mx-2 rounded-full'
                                            src={user?.photoURL}
                                            alt='avatar'
                                            referrerPolicy='no-referrer'
                                        />
                                    </Link>
                                    <Link to='/dashboard'>
                                        <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                            {user?.displayName}
                                        </h4>
                                    </Link>
                                    <Link to='/dashboard'>
                                        <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                            {user?.email}
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className='flex flex-col justify-between flex-1 mt-6'>
                                <nav>
                                    <>
                                        {/* Menu Links */}




                                        <NavLink
                                            to='allStudent'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>Manage Student</span>
                                        </NavLink>


                                        <NavLink
                                            to='allClass'
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                            {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                                            <span className='mx-4 font-medium'>Manage Classes</span>
                                        </NavLink>
                                    </>
                                </nav>
                            </div>
                        </div>

                        <div>
                            <hr />
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <FcSettings className='w-5 h-5' />

                                <span className='mx-4 font-medium'>HOME</span>
                            </NavLink >
                            <Link to='/'> <div
                                onClick={logOut}
                                className='px-4 py-3 flex hover:bg-neutral-100 transition font-semibold cursor-pointer'
                            >
                                <GrLogout className='w-5 h-5' />
                                Logout
                            </div></Link>
                        </div>
                    </div>



                </div>
                }


            </div>
            {/* Small Screen Navbar */}

        </>
    );
};

export default Sidebar;