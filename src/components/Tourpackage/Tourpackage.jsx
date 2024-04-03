import React from 'react';
import TourCard from './TourCard';

import p1 from '../Assets/p-1.jpg'
import p2 from '../Assets/p-2.jpg'
import p3 from '../Assets/p-3.jpg'
import p4 from '../Assets/p-4.jpg'
import p5 from '../Assets/p-5.jpg'
import p6 from '../Assets/p-6.jpg'
import { DataProvider } from '../../context/package';

const details = [{
    image : p1,
    place : "Mumbai",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia sit in at earum quod.",
    currentPrice : "$90.00",
    TotalPrice : "$120.00"
}, {
    image : p2,
    place : "Hawaii",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia sit in at earum quod.",
    currentPrice : "$90.00",
    TotalPrice : "$120.00"
}, {
    image : p3,
    place : "Sydney",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia sit in at earum quod.",
    currentPrice : "$90.00",
    TotalPrice : "$120.00"
}, {
    image : p4,
    place : "Paris",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia sit in at earum quod.",
    currentPrice : "$90.00",
    TotalPrice : "$120.00"
}, {
    image : p5,
    place : "Tokyo",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia sit in at earum quod.",
    currentPrice : "$90.00",
    TotalPrice : "$120.00"
}, {
    image : p6,
    place : "Eypt",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia sit in at earum quod.",
    currentPrice : "$90.00",
    TotalPrice : "$120.00"
}];

const Tourpackage = () => {
    return (
        <div>
            <section className="p-4 m-20" id="packages">
                <h1 className="heading p-3"> 
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span>S</span>
                </h1>
                <div className="flex flex-wrap">  {/* flex flex-wrap gap-6 mt-20 */}
                    {details.map(info => <>
                        {/* <DataProvider key={info.place}> */}
                        <TourCard img={info.image} city={info.place} about={info.description} discountPrice={info.currentPrice} price={info.TotalPrice} />
                        {/* </DataProvider> */}
                    </>)}
                </div>
            </section>
        </div>
    )
}

export default Tourpackage