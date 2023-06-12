import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { saveUser } from '../../Api/Auth';
import { Fade } from 'react-awesome-reveal';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading, setLoading, signIn, signInWithGoogle, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  // Handle Email password sign in with react hook
  const onSubmit = async (data) => {
    try {
      toast.success("Success Login");
      setLoading(true);
      await signIn(data.email, data.password);
      navigate(from, { replace: true });
      setLoading(false)
    } catch (error) {
      toast.error('Failed to sign in. Please check your info and try again.');
      setLoading(false);
    }
  };

  // handle Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        navigate(from, { replace: true })
      }).catch(err => {
        setLoading(false)
        console.log(err.message);
        toast.error(err.message)

      })
  }

  return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold text-green-500'>Log In</h1>
            <p className='text-sm text-green-600'>Sign in to access your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate='' action='' className='space-y-6 ng-untouched ng-pristine ng-valid'>
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  {...register('email')}
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  {...register('password')}
                  type='password'
                  name='password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                />
              </div>
            </div>

            <div>
              <button type='submit' className='bg-green-500 w-full rounded-md py-3 text-white'>
                {loading ? <TbFidgetSpinner className='m-auto animate-spin' size={24} /> : 'Login'}
              </button>
            </div>
          </form>
          <div className='space-y-1'>
            <button className='text-xs hover:underline hover:text-green-500 text-gray-400'>Forgot password?</button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>Login with social accounts</p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
          >
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Don't have an account yet?{' '}
            <Link to='/singUp' className='hover:underline hover:text-green-500 text-gray-600'>
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
  );
};

export default Login;
