import React from 'react';

const PopularInstructorBox = ({ item }) => {

    const { name, image, email, } = item;
    return (
        <div className='text-center ex-shadow group'>
            <div className=' hover:drop-shadow-2xl space-y-2'>
                <img md:width='300' className='rounded-lg transition group-hover:scale-105' src={image} alt="" />
                <h2 className='text-xl text-green-500 font-bold'>{name}</h2>
                <h2 className='text-left text-slate-600'>Email: {email}</h2>
            </div>
        </div>
    );
};

export default PopularInstructorBox;