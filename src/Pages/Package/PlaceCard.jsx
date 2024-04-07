import React from 'react';

const PlaceCard = (props) => {
    return (
        <div className='shadow shadow-gray-500 rounded-lg bg-white m-5 p-4 grow w-96'>
            <div className='m-2 h-64 '>
                <img src={props.picture} className="rounded-lg w-full h-full object-cover" alt="place_img" />
            </div>
            <div className='text-lg'>
                <div className='m-2 mt-4'>
                    <h2 className='text-3xl font-sans font-bold'>{props.placeName}</h2> 
                    <h3 className='text-2xl text-gray-600 font-bold'>{props.subName}</h3>
                </div>
                <div className='m-3 font-sans text-gray-500 text-xl'>{props.details}</div>
                <div className='border-t border-black flex justify-between mt-6'>
                    <div className='m-2'>
                        <h2 className='font-bold text-2xl font-sans'>{props.time}</h2>
                        <h3 className='font-bold text-gray-600'>Suggested Time</h3>
                    </div>
                    <div className='pt-4 text-2xl font-bold text-blue-600 font-sans cursor-pointer'>Explore<i class="fas fa-angle-right m-2"></i></div>
                </div>
            </div>
        </div>
    );
}

export default PlaceCard;