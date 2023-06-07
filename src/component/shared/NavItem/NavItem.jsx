import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';
import { AuthContext } from '../../../providers/AuthProvider';

const NavItem = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='md:block hidden'>
            <NavLink className='p-5 nav-ex' exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className='p-5 nav-ex' to="/about" activeClassName="active">Instructors</NavLink>
            <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Classes</NavLink>
            <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Dashboard </NavLink>
            {user? 
            <NavLink  onClick={logOut} className='p-5 nav-ex' to="/login" activeClassName="active">Logout </NavLink>
            
            : <NavLink className='p-5 nav-ex' to="/login" activeClassName="active">Login </NavLink>}
        </div>
    );
};

export default NavItem;
