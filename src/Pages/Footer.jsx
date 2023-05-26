import React from 'react';
import { FaBeer, FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-slate-800'>
            <footer className="footer text-white grid ml-0 p-4  lg:grid-cols-6 my-container gap-4 py-10 bg-base-200 text-base-content">
                <div className='col-span-2 text-left'>
                    <div>
                        <div className="footer-title font-bold text-3xl w-fit px-4 py-1 bgc rounded-sm ">Reciba</div>
                        <p>Our company is a chef provider in hole china. available category chef provide in our company  </p>
                        <div className='flex mt-10'>

                            <FaFacebookSquare size={35} className='mr-4 cursor-pointer' />
                            <FaTwitterSquare size={35} className='mr-4 cursor-pointer' />
                            <FaInstagram size={35} className='mr-4 cursor-pointer' />
                            <FaLinkedinIn size={35} className='mr-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="footer-title text-2xl font-semibold">Service</div>
                    <ul>
                        <li className="link link-hover">Chicken cooking </li>
                        <li className="link link-hover">Beep cary</li>
                        <li className="link link-hover">Fried Rice</li>
                        <li className="link link-hover">Wonton Soup</li>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <div className="footer-title text-2xl font-semibold">Useful Link</div>
                    <ul>
                        <li className="link link-hover">Terms of use</li>
                        <li className="link link-hover">Privacy policy</li>
                        <li className="link link-hover">Cookie policy</li>
                        <Link to='/blog'><li className="link link-hover">Blog</li></Link>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <div className="footer-title text-2xl font-semibold">Newsletter</div>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative rounded-md ">
                            <input type="text" placeholder="username@site.com" className="input rounded-md p-4 input-bordered w-full pr-16" />
                            <button className="btn btn-primary bgc absolute top-0 p-4 right-0 rounded-md">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <h5 className='text-center text-white pb-4'>&copy;All rights reserved Reciba2023. </h5>
        </div>
    );
};

export default Footer;