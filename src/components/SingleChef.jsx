import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link, } from 'react-router-dom';

const SingleChef = ({ chef }) => {

    const { name, description, experience_year, like, num_of_recipes, picture, id } = chef;
    const handleViewDetails = () => {

    }

    return (
        <div className="card w-96  bg-base-100 rounded-md shadow-2xl">
            <figure><img className='w-96 p-2 rounded-md h-96' src={picture} alt="Shoes" /></figure>
            <div className="card-body  p-3">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className='text-gray-500 py-4'>{description.slice(0, 70)}...</p>
                <div className='flex justify-between items-center pb-4'>
                    <div>
                        <p>Number of recipe:{num_of_recipes}</p>
                        <p>Experience:{experience_year} years</p>
                    </div>
                    <div>
                        <p className='flex items-center '><AiFillLike /> <span>{like}</span> </p>
                    </div>
                </div>
                <div className=" ">
                    <span onClick={handleViewDetails}>   <Link to={`/${id}`}><button className='my-btn'>View Details </button></Link></span>
                </div>
            </div>

        </div>
    );
};

export default SingleChef;