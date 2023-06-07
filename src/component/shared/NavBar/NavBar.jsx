import React from 'react';
import Container from '../Container/Container ';
import { Link } from 'react-router-dom';
import MenuDropDown from '../MenuDropDown/MenuDropDown';
import NavItem from '../NavItem/NavItem';

const NavBar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <Link to='/'> <div className='cursor-pointer hidden md:block'><img width='70' src="https://i.ibb.co/7z504Kx/Orange-Black-Illustrated-School-of-Mu-Logo.png" alt="" /></div></Link>
                        <div><NavItem></NavItem></div>
                        <div><MenuDropDown></MenuDropDown></div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;