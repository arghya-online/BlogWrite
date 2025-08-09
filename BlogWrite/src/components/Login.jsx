import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/30 bg-white/30 backdrop-blur-md shadow-xl p-10">
        
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
          <Logo width="60%" />
        </div>

        <h2 className="mt-12 text-center text-2xl font-bold text-gray-800">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-base text-gray-600">
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            className="text-indigo-600 font-semibold hover:underline transition"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <p className="text-red-600 mt-6 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-5">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email address must be a valid address',
              }, 
            })}
          />
          {/* regex google for email validation */}
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
            })}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
