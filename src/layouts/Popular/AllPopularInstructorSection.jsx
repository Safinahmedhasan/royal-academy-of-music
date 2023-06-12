import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PopularInstructorBox from '../PopularInstructor/PopularInstructorBox';

const AllPopularInstructorSection = () => {
    const [instructors, setInstructors] = useState([]);
    const [roleInstructors, setRoleInstructors] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users`)
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                const instructor = data.filter(item => item.role === "instructor");
                setRoleInstructors(instructor);
            });
    }, []);


    return (
        <div className='flex flex-col container mx-auto'>
            <div>
                <div className='flex justify-around items-center'>
                    <div className='mt-20 text-center border-b-4 border-green-300'>
                        <p className='text-green-600'>Royal Academy of music</p>
                        <h2 className='text-2xl md:text-4xl text-green-500 font-bold mb-3'>Popular Instructor</h2>
                    </div>
                </div>
            </div>
                {roleInstructors.length > 0 ? (
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mt-10 md:grid-cols-3">
                        {roleInstructors.map(item => (
                            <PopularInstructorBox key={item._id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="pt-12">
                        <p title="No Instructor Available In This Category" center={true}>
                            No Instructor Available In This Category
                        </p>
                    </div>
                )}
        </div>
    );
};

export default AllPopularInstructorSection;