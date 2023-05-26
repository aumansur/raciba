import React from 'react';

const NumberOfRecipe = ({ recipe }) => {
    const { name, picture } = recipe;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl mt-6">

            <figure><img className='w-60 h-60' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-center">{name}</h2>

            </div>
        </div>
    );
};

export default NumberOfRecipe;