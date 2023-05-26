import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import Rating from 'react-rating';
import NumberOfRecipe from '../components/NumberOfRecipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewDetails = () => {
    const [disable, setDisable] = useState(false)

    const notify = () => toast.success('Add to bookmarked ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleBookmark = () => {
        setDisable(true)
        notify();




    }

    const loader = useLoaderData();


    const { name, description, experience_year, like, num_of_recipes, picture, id, banner, rating, recipes } = loader;


    return (
        <div>
            <div className="my-container card card-compact lg:w-[900px] bg-base-100 shadow-2xl">
                <figure><img className='w-full h-96' src={banner} alt="Shoes" /></figure>
                <div className="card-body p-6">
                    <div className='flex mt-6  items-center'>
                        <img className='w-16 h-16 rounded-full' src={picture} alt="" />
                        <h2 className="card-title ml-4 text-2xl font-medium">{name}</h2>
                    </div>
                    <p className='mt-6 text-gray-500'>{description}</p>
                    <div className='flex justify-between items-center pt-4 pb-4'>
                        <div>
                            <p>Number of recipe:{num_of_recipes}</p>
                            <p>Experience:{experience_year} years</p>
                        </div>
                        <div className='mr-16'>
                            <p className='flex items-center '><AiFillLike className='text-blue-600' size={25} /> <span className='ml-2'>{like}</span> </p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div>
                                <Rating className='text-yellow-500'
                                    placeholderRating={rating}
                                    emptySymbol={<AiOutlineStar size={25} />}
                                    placeholderSymbol={<AiFillStar size={25} />}
                                    fullSymbol={<AiFillStar size={25} />}
                                />
                            </div>
                            <div className='ml-2'>
                                {rating}
                            </div>

                        </div>
                        <div className='text-right mr-14 '>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            {/* Same as */}
                            <ToastContainer />
                            <button disabled={disable} onClick={handleBookmark} className="  flex items-center"><span> </span> <BsBookmarkFill size={30} /> </button>
                        </div>

                    </div>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className='py-6'>
                <h3 className='text-center text-2xl font-semibold mt-10'>My another recipe</h3>
                <div className=' grid lg:grid-cols-3 my-container place-items-center lg:w-[900px] gap-6'>

                    {
                        recipes.map(recipe => <NumberOfRecipe recipe={recipe}> </NumberOfRecipe>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;