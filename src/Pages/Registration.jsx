import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const [error, setError] = useState('')
    const { createSignUp } = useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const photo = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            return setError('password must be at least 6 characters')
        }
        if (password !== confirm) {
            return setError('password dose not match ')
        }

        createSignUp(email, password)
            .then(result => {
                setError('')
                const createdUser = result.user;
                updateUer(result.user, name, photo)

                form.reset()
            })
            .catch(error => {
                setError(error.message)

            })

        const updateUer = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() => {

                })
                .catch(error => {
                    setError(error.message)
                })
        }


    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-slate-600">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center pc uppercase">
                    please  Registration
                </h1>
                <form onSubmit={handleRegistration} className="mt-6">
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            name='userName'
                            className="block w-full px-4 py-2 mt-2 pc bg-white border rounded-md focus:border-amber-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            required
                            name='photo_url'
                            className="block w-full px-4 py-2 mt-2 pc bg-white border rounded-md focus:border-amber-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            required
                            className="block w-full px-4 py-2 mt-2 pc bg-white border rounded-md focus:border-amber-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="block w-full px-4 py-2 mt-2 pc bg-white border rounded-md focus:border-amber-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name='confirm'
                            required
                            className="block w-full px-4 py-2 mt-2 pc bg-white border rounded-md focus:border-amber-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href=" "
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bgc rounded-md hover:bg-amber-600 focus:outline-none">
                            Registration
                        </button>
                        <p className='text-red-500'>{error}</p>
                    </div>
                </form>


                <p className="mt-8 text-[16px] font-light text-center text-gray-700">
                    {" "}
                    Already  have an account?{" "}
                    <Link to='/login' className=' className="font-medium text-purple-600 hover:underline'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;