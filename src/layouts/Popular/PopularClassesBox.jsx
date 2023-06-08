import React from 'react';

const PopularClassesBox = ({items}) => {

    const { name, image, recipe, price } = items;

    return (
        <div className='group hover:scale-105 transition'>
            <img md:width='300' className='rounded-lg' src={image} alt="" />
            <h2>This is {name}</h2>
        </div>
    );
};

export default PopularClassesBox;