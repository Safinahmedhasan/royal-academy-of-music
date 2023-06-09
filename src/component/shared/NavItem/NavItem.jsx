import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';
import { AuthContext } from '../../../providers/AuthProvider';
import UseCart from '../../../Hooks/UseCart/UseCart';

const NavItem = () => {
    const { user, logOut } = useContext(AuthContext);
    const[cart] = UseCart();

    return (
        <div className='md:block hidden'>
            <NavLink className='p-5 nav-ex' exact to="/" activeClassName="active">Home</NavLink>
            <NavLink className='p-5 nav-ex' to="/about" activeClassName="active">Instructors</NavLink>
            <NavLink className='p-5 nav-ex' to="/contact" activeClassName="active">Classes</NavLink>

          { user&& <NavLink className='p-5 nav-ex' to="/dashboard" activeClassName="active">Dashboard </NavLink>}

           {user&&  <NavLink className='p-5 nav-ex' to="/dashboard/mycart" activeClassName="active">
                <div className="indicator">
                    <span className="indicator-item badge bg-green-500 text-white">+{cart?.length || 0}</span>
                    <button className="p-2">My Selected Classes</button>
                </div>
            </NavLink>}
            {user ?
                <NavLink onClick={logOut} className='p-5 nav-ex' to="/login" activeClassName="active">Logout </NavLink>

                : <NavLink className='p-5 nav-ex' to="/login" activeClassName="active">Login </NavLink>}
        </div>
    );
};

export default NavItem;
