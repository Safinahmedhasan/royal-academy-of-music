import React, { useEffect, useState } from 'react';
import PopularClassesBox from './PopularClassesBox';
import { Link } from 'react-router-dom';

const AllPupolarClassSection = () => {


    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/class`)
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])


    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-around items-center'>
                <div className='mt-20 text-center border-b-4 border-green-300 w-96'>
                    <p className='text-green-600'>Royal Academy of music</p>
                    <h2 className='text-2xl md:text-4xl text-green-500 font-bold mb-3'>Popular Classes</h2>
                </div>
            </div>
                {
                    classes && classes.length > 0 ? <div className="pt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">

                        {
                            classes.map((item) => <PopularClassesBox
                                key={item._id}
                                item={item}
                            ></PopularClassesBox>)
                        }

                    </div> : <div className="pt-12">
                        <p
                            title="No Rooms Available In This Category"
                            subtitle='Please Select Other Categories'
                            center={true}
                        ></p>
                    </div>
                }
        </div>
    );
};

export default AllPupolarClassSection;