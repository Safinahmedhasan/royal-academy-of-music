import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = () => {
    return (
        <div className=''>
            <NavLink className='p-5 nav-ex' exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className='p-5 nav-ex' to="/about" activeClassName="active">Instructors</NavLink>
            <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Classes</NavLink>
            <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Dashboard </NavLink>
        </div>
    );
};

export default NavItem;
