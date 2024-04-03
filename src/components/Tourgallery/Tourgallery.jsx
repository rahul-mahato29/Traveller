import React from 'react'
import './Tourgallery.css'

import g1 from '../Assets/g-1.jpg'
import g2 from '../Assets/g-2.jpg'
import g3 from '../Assets/g-3.jpg'
import g4 from '../Assets/g-4.jpg'
import g5 from '../Assets/g-5.jpg'
import g6 from '../Assets/g-6.jpg'
import g7 from '../Assets/g-7.jpg'
import g8 from '../Assets/g-8.jpg'
import g9 from '../Assets/g-9.jpg'
import GalleryCard from './GalleryCard'

const details = [{
    image : g1,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g2,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g3,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g4,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g5,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g6,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g7,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g8,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}, {
    image : g9,
    place : "Amazing Place",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.",
}];

const Tourgallery = () => {
    return (
        <div>
            <section class="gallery" id="gallery">
                <h1 class="heading">
                    <span>G</span>
                    <span>A</span>
                    <span>L</span>
                    <span>L</span>
                    <span>E</span>
                    <span>R</span>
                    <span>Y</span>
                </h1>
                <div class="gallery-container flex flex-wrap">
                    {details.map(info => <>
                        <GalleryCard img={info.image} placeName={info.place} about={info.description} />
                    </>)}
                </div>
            </section>
        </div>
    )
}

export default Tourgallery