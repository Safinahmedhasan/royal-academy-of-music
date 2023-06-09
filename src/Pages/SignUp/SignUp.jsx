import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { loading, setLoading, signInWithGoogle, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();

  // handle Google Sign In
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const saveUser = {
          name: displayName,
          email: email,
          imageUrl: photoURL,
        };

        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(saveUser),
        })
          .then(() => {
            setLoading(false);
            toast.success('Success SignUp');
            navigate(from, { replace: true });
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  // Handle User Register
  const onSubmit = (data) => {
    const { name, email, password, image } = data;

    // Your image upload logic here

    createUser(email, password)
      .then((result) => {
        const saveUser = {
          name: name,
          email: email,
          imageUrl: '', // Replace with the URL of the uploaded image
        };

        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(saveUser),
        })
          .then(() => {
            setLoading(false);
            toast.success('Success SignUp');
            navigate(from, { replace: true });
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  // confirm Password Matching Function
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const isSignUpDisabled = password !== confirmPassword;

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='max-w-md p-6 rounded-md bg-white'>
        <h1 className='mb-6 text-4xl font-bold text-green-500 text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='space-y-6'>
          <div className='space-y-1'>
            <input
              type='text'
              id='name'
              name='name'
              autoComplete='off'
              placeholder='Name'
              className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none'
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-red-500'>Name is required</span>}
          </div>
          <div className='space-y-1'>
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='off'
              placeholder='Email'
              className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none'
              {...register('email', { required: true })}
            />
            {errors.email && <span className='text-red-500'>Email is required</span>}
          </div>
          <div className='space-y-1'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none'
              required
              onChange={handlePasswordChange}
              {...register('password', { required: true })}
            />
            {errors.password && <span className='text-red-500'>Password is required</span>}
          </div>
          <div className='space-y-1'>
            <input
              type='password'
              id='confirm-password'
              name='confirm-password'
              placeholder='Confirm Password'
              className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none'
              required
              onChange={handleConfirmPasswordChange}
              {...register('confirmPassword', { required: true })}
            />
            {errors.confirmPassword && <span className='text-red-500'>Confirm Password is required</span>}
          </div>
          <div className='space-y-1'>
            <input
              type='file'
              id='image'
              name='image'
              className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none'
              required
              {...register('image', { required: true })}
            />
            {errors.image && <span className='text-red-500'>Image is required</span>}
          </div>
          <button
            type='submit'
            disabled={isSignUpDisabled || loading}
            className='flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none'
          >
            {loading ? <TbFidgetSpinner className='animate-spin w-5 h-5 mr-3' /> : 'Sign Up'}
          </button>
        </form>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            Already have an account?{' '}
            <Link to='/signin' className='font-medium text-green-500 hover:text-green-600'>
              Sign In
            </Link>
          </p>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <button
            className='flex items-center justify-center w-full p-2 text-base text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none'
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <FcGoogle className='w-5 h-5 mr-3' />
            {loading ? 'Signing In...' : 'Sign In with Google'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
