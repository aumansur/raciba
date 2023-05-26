import React from 'react';

const About = () => {
    return (
        <div className='my-container lg:flex justify-between py-16'>
            <div className='lg:flex lg:p-0 p-2'>
                <div className='mb-4 lg:mb-0'>
                    <img className='w-full rounded-md' src="https://a6e8z9v6.stackpathcdn.com/recibo/red/wp-content/uploads/2013/12/photodune-1421017-restaurant-set-m-440x550.jpg" alt="" />
                </div>
                <div className='lg:ml-6'>
                    <img className='w-full rounded-md' src="https://a6e8z9v6.stackpathcdn.com/recibo/red/wp-content/uploads/2013/12/photodune-7791145-cheese-variety-m-440x550.jpg" alt="" />
                </div>
            </div>
            <div className='text-center px-8 flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Little About Us</h1>
                    <h2 className='text-xl text-gray-400 py-2'>THE HISTORY OF US</h2>
                    <p className='text-gray-400 lg:w-[520px] pb-4 '>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.Integer posuere erat a ante venenatis.</p>
                    <button className='my-btn'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;