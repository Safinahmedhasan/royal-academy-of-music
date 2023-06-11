import React, { useContext, useState } from 'react';
import AddClassForm from '../Form/AddClassForm';
import { imageUpload } from './utils';
import { AuthContext } from '../../providers/AuthProvider';
import { addClass } from './Class';
import { toast } from 'react-hot-toast';

const AddClass = () => {
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const {user} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const Instructor = event.target.Instructor.value;
        const seats = event.target.seats.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const image = event.target.image.files[0];


        imageUpload(image)
        .then(data => {
            const classData = {
                image: data.data.display_url, price, email, seats, Instructor, name,
                host:{
                    name: user?.displayName,
                    image: user?.photoURL,
                    email: user?.email,
                }  
            };

            addClass(classData).then(data=>console.log(data)).catch(err => console.log(err))   
            toast.success('Class Add Success')
            
        })
        .catch(error => {
            console.error(error);
        });

    }

    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <AddClassForm handleSubmit={handleSubmit} handleImageChange={handleImageChange} uploadButtonText={uploadButtonText}></AddClassForm>
        </div>
    );
};

export default AddClass;