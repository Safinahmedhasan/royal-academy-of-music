import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedBack = () => {
    const feedback = useLoaderData();

    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedbackValue = form.feedback.value;

        const updatefeedback = { feedback: feedbackValue };

        fetch(`http://localhost:5000/class/${feedback._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatefeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Feedback Success',
                        icon: 'success',
                        confirmButtonText: 'Update'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2 className='text-center  text-4xl text-green-500'>Feedback</h2>
            <h2 className='text-center mt-24 text-xl'>Class: {feedback.name}</h2>
            <h2 className='text-center mt-4 text-base'>Instructor: {feedback.Instructor}</h2>
            <form className='flex flex-col justify-center items-center mt-5' onSubmit={handleFeedback}>
                <input className='w-96 h-52 border-green-500 border-4 rounded-xl'
                    name='feedback'
                    type="text" />
                <input className='btn bg-green-500 mt-10 text-white' type="submit" value="Feedback" />
            </form>
        </div>
    );
};

export default FeedBack;
