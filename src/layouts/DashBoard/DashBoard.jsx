import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaBars, FaHome, FaUserCheck, FaSchool, FaWallet } from 'react-icons/fa';
import UseCart from '../../Hooks/UseCart/UseCart';
import './BashBoard.css'

// DD

const DashBoard = () => {
    const { user, logOut, role, seRole } = useContext(AuthContext);
    const [cart] = UseCart();

    // TODO
    // const isAdmin = role;


    return (
        <div>
            {user && role === 'admin' && <div>
                Admin
            </div>}
            {user && role === '' && <div>
                Student
            </div>}
        </div>
    );
};

export default DashBoard;