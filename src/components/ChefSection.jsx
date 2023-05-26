import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const ChefSection = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://reciba-server.vercel.app/chefs/')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className=' mt-16'>
            <h1 className='text-center mb-6 text-4xl font-bold pc '><span className='border-b-2 border-amber-400'>Our Chineas Chefs</span></h1>
            <div className='my-container grid lg:grid-cols-3 gap-8 rounded-lg place-items-center'>

                {
                    chefs.map(chef => <SingleChef key={chef.id} chef={chef} > </SingleChef>)
                }
            </div>
        </div>

    );
};

export default ChefSection;