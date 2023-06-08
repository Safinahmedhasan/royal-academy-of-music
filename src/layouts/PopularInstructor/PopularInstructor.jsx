import React, { useEffect, useState } from 'react';
import Container from '../../component/shared/Container/Container ';
import PopularInstructorBox from './PopularInstructorBox';

const PopularInstructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    return (
        <div>
            <div className='mt-20 text-center border-b-4 border-green-300 w-96 mx-auto'>
                <p className='text-green-600'>Royal Academy of music</p>
                <h2 className='text-2xl md:text-4xl text-green-500 font-bold mb-3'>Popular Classes</h2>
            </div>
            <Container>
                {
                    instructors && instructors.length > 0 ? <div className="pt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">

                        {
                            instructors.map(item => <PopularInstructorBox
                                key={item._id}
                                item={item}
                            ></PopularInstructorBox>)
                        }

                    </div> : <div className="pt-12">
                        <p
                            title="No Rooms Available In This Category"
                            subtitle='Please Select Other Categories'
                            center={true}
                        ></p>
                    </div>
                }
            </Container>
        </div>
    );
};

export default PopularInstructor;