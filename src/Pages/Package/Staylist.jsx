import React from 'react';

const Staylist = (props) => {
    return (
        <div className='shadow shadow-gray-700 rounded-lg bg-white m-5 pr-20 h-32 flex justify-between cursor-pointer'>
            <div className='m-3 pt-2'>
                <h2 className='text-3xl font-bold'><i className="fas fa-star text-yellow-500 m-2"></i>{props.star} STAR HOTELS</h2>
                <h3 className='text-2xl text-gray-500 ml-3'>Recommended For You</h3>
            </div>
            <div className='m-6'>
                <h2 className='text-3xl text-gray-600'>Average Price</h2>
                <h1 className='font-bold text-3xl ml-10 text-blue-600'>{props.price}</h1>
            </div>
        </div>
    );
}

export default Staylist;