import React, { useContext } from 'react';
import avater from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img src={user && user.photoURL ? user.photoURL : avater} width='30' height='30' className='rounded-2xl' alt="" />
        </div>
    );
};

export default Avatar;