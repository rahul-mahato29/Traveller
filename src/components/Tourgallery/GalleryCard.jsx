import React from 'react'
import { Link } from 'react-router-dom';
import './Tourgallery.css'

const GalleryCard = (props) => {
    return (
        <div>
            <div class="gallery-box">
                <img src={props.img} alt="gall_pic" />
                <div class="content">
                    <h3>{props.placeName}</h3>
                    <p>{props.about}</p>
                    <Link to="gallery/city1"> <button className='g-btn'>See More</button> </Link> 
                </div>
            </div>
        </div>
    )
}

export default GalleryCard;