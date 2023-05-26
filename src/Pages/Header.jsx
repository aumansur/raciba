import React, { useContext } from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleLoggedOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='bg-gray-600'>
            <div className=' mx-auto container max-[1180px] '>
                <nav className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex-shrink-0">
                                <Link to='/'> <h1 className='text-4xl font-bold pc'>Reciba</h1></Link>

                            </div>
                            <div className="hidden md:block text-white">
                                <div className="ml-10 flex  items-baseline space-x-4">
                                    <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='/'>Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='blog'>Blog</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='registration'>Registration</NavLink>
                                    {user ? <button className='my-btn' onClick={handleLoggedOut}>Log Out  </button> : <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='login'><button >Login  </button></NavLink>}



                                    <div className='flex-inline items-center w-fit ' >
                                        {user && <img title={user.displayName} className='w-10 h-10 rounded-full ml-8  ' src={user.photoURL} alt="" />}
                                    </div>


                                </div>
                            </div>
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? (
                                        <FaTimes className="block h-6 w-6" />
                                    ) : (
                                        <FaBars className="block h-6 w-6" />
                                    )}
                                </button>
                                {isMobileMenuOpen && (
                                    <div className="md:hidden z-20 absolute right-0 top-10">
                                        <div className="px-2 pt-2 pb-3  space-y-1 mt-5 bg-slate-500 transition-3 sm:px-3">
                                            <p> <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='/'>Home</NavLink></p>
                                            <p> <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='blog'>Blog</NavLink></p>
                                            <p><NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='registration'>Registration</NavLink></p>
                                            {user ? <p><button className='my-btn' onClick={handleLoggedOut}>Log Out  </button></p> : <p> <NavLink className={({ isActive }) => isActive ? "text-amber-400 " : ""} to='login'><button >Login  </button></NavLink></p>}

                                            <div className='flex-inline items-center w-fit ' >
                                                {user && <img title={user.displayName} className='w-10 h-10 rounded-full ml-8  ' src={user.photoURL} alt="" />}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        </div >
    );
};

export default Header;