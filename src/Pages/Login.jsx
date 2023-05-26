import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const { createLogin, myAuth } = useContext(AuthContext)
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = myAuth()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)

            .then(result => {

                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)

            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
    }


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createLogin(email, password)
            .then(result => {
                setError('')
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                form.reset()

            })
            .catch(error => {
                setError(error.message)

            })


    }
    return (
        <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden bg-slate-600">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center pc uppercase">
                    Please login
                </h1>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            name='email'
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
                            required
                            type="password"
                            name='password'
                            className="block w-full px-4 py-2 mt-2 pc bg-white border rounded-md focus:border-amber-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bgc rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-400">
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-amber-400"
                    >
                        <FaGoogle />  <span className='ml-2'> Login with google</span>
                    </button>
                    <button onClick={handleGithubLogin} className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-amber-400">
                        <FaGithub /> <span className='ml-2'> Login with github</span>
                    </button>

                </div>
                <p className='text-red-500'>{error}</p>

                <p className="mt-8 text-[16px] font-light text-center text-gray-700">

                    Don't have an account?
                    <Link to='/registration' className=' className="font-medium text-purple-600 hover:underline ml-2'>Registration</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;