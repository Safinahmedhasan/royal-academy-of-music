import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useContext, useState } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import { Link, NavLink } from 'react-router-dom'
import Avatar from '../NavBar/Avatar';
import UseCart from '../../../Hooks/UseCart/UseCart';


const MenuDropDown = () => {
    const[cart] = UseCart();
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                {/* To Do */}
                <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    {/* AirCNC your home */}
                </div>
                <div
                    onClick={toggleOpen}
                    className='md:hidden block p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                </div>
                <div className='hidden md:block'>
                    <Avatar></Avatar>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <NavLink className='p-5 nav-ex' exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink className='p-5 nav-ex' to="/about" activeClassName="active">Instructors</NavLink>
                        <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Classes</NavLink>
                        {user && <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Dashboard </NavLink>}


                        {user && <NavLink className='p-5 nav-ex' to="/" activeClassName="active">
                            <div className="indicator">
                                <span className=" badge bg-green-500 text-white">+{cart?.length || 0}</span>
                                <button className='ml-3'>Due Payment</button>
                            </div>
                        </NavLink>}

                        {user ? (
                            <div
                                onClick={logOut}
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                            >
                                Logout
                            </div>
                        ) : (
                            <>
                                <NavLink className='p-5 nav-ex' to="/login" activeClassName="active">Login </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuDropDown;