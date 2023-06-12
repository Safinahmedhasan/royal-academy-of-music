import React from 'react';
import { Fade } from 'react-awesome-reveal';

const PopularInstructorBox = ({ item }) => {

    const { name, image, email, role } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <Fade direction="up" delay={500} triggerOnce>
                <figure><img src={image} className='h-80 w-96' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-500 font-bold text-xl">
                        {name}
                        <div className="badge bg-green-500 text-white">Top</div>
                    </h2>
                    <p className='text-green-500'>Email: <span className='text-rose-500'>{email}</span></p>
                    <p>Role: <span className='text-rose-500'>{role}</span></p>
                    <p>Class: Gitter</p>
                    <p>Student: 4</p>
                </div>
            </Fade>
        </div>
    );
};

export default PopularInstructorBox;