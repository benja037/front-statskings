'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { handleLogin } from '@/lib/actions';

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data, event) => {
    event?.preventDefault(); // Prevent default form submission
    console.log("Login button pressed");
    console.log("Form data: ", data);
    try {
      const response = await fetch('https://apistatskingsfutbol.up.railway.app/authenticate/jwt/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.email.toLowerCase(),
          password: data.password
        })
      });

      if (response.ok) {
        const result = await response.json();
        // Llama a la acción del servidor para manejar el inicio de sesión
        await handleLogin(data.email.toLowerCase(), result.access, result.refresh);
        router.push('/torneos');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <label className="block" htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {errors.email && <span className="text-xs text-red-600">Email is required</span>}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {errors.password && <span className="text-xs text-red-600">Password is required</span>}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="w-full px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Login</button>
          </div>
          {errorMessage && <span className="text-xs text-red-600">{errorMessage}</span>}
        </form>
      </div>
    </div>
  );
}
