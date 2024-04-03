import React from 'react';
import { Link } from 'react-router-dom';
// import { useData } from '../../context/package';

const TourCard = (props) => {

    // const { setData } = useData();

    function handleClick(){

        // const name = "bombay";
        // setData({name});

        //scroll to top
        window.scrollTo(0, 0);
    }

    return (
        <div className='grow'>
            <div className="shadow-xl shadow-gray-500/70 rounded-lg max-w-md p-4 pb-6">    {/* overflow-hidden */}
                <div className="image">
                    <img className="w-full h-full object-cover" src={props.img} alt="place_img" />
                </div>
                <div className='p-4'>
                    <h3 className="text-2xl text-gray-700 my-2" ><i className="text-orange-500 my-2 fas fa-map-marker-alt"></i>{props.city}</h3>
                    <p className="text-lg text-gray-600">{props.about}</p>
                    <div className="stars my-4">
                        <i className="fas fa-star text-xl text-gold"></i>
                        <i className="fas fa-star text-xl text-gold"></i>
                        <i className="fas fa-star text-xl text-gold"></i>
                        <i className="far fa-star text-xl text-gold"></i>
                        <i className="fas fa-star text-xl text-gold"></i>
                    </div>
                    <div className="text-2xl mb-8">{props.discountPrice} <span className='line-through text-lg text-gray-600'>{props.price}</span></div>
                    <Link to="/packages/mumbai"> <button onClick={handleClick} className=' bg-orange-500 px-10 py-2 text-lg capitalize text-white border-4 border-orange-500 hover:bg-orange-100 hover:text-orange-500'>Book Now</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default TourCard;