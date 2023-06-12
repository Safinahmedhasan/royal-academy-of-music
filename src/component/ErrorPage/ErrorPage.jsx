import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const { user, role } = useContext(AuthContext)
    return (
        <div>
            {user && role === 'student' && <div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/cJYnTwf/404-error-dribbble-800x600.gif" alt="" />
                   <Link to='/'> <button className='btn bg-green-500'>BACK TO HOME</button></Link>
                </div>
            </div>}
            {user && role === 'admin' && <div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/cJYnTwf/404-error-dribbble-800x600.gif" alt="" />
                   <Link to='/dashboard'> <button className='btn bg-green-500'>BACK TO HOME</button></Link>
                </div>
            </div>}


        </div>
    );
};

export default ErrorPage;