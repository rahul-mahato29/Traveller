import React, { useState } from 'react';

import p1 from '../Package/picture/c2.png';
import Staylist from './Staylist';
import PlaceCard from './PlaceCard';

import img1 from '../Package/picture/img1.webp';
import img2 from '../Package/picture/img2.webp';
import img3 from '../Package/picture/img3.webp';
import img4 from '../Package/picture/img4.webp';
import img5 from '../Package/picture/img5.webp';
import img6 from '../Package/picture/img6.avif';
// import { useData } from '../../context/package';

const packageDetails = [{
    image: img1,
    name: "Global Vipassna Pagoda",
    popularFor: "Serene Meditation Hall",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis totam, labore reiciendis quo numquam odio, soluta nisi aut officia deserunt. Vel quia sint ratione exercitationem soluta quam repellat dolorum!",
    time: "1-2 hours"
}, {
    image: img2,
    name: "Gateway of India Mumbai",
    popularFor: "Iconic Landmark",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis totam, labore reiciendis quo numquam odio, soluta nisi aut officia deserunt. Vel quia sint ratione exercitationem soluta quam repellat dolorum!",
    time: "2-3 hours"
}, {
    image: img3,
    name: "Taraporewala Aquarium",
    popularFor: "Beautiful Marine Life Facility",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis totam, labore reiciendis quo numquam odio, soluta nisi aut officia deserunt. Vel quia sint ratione exercitationem soluta quam repellat dolorum!",
    time: "1-2 hours"
}, {
    image: img4,
    name: "Sanjay Gandhi Park",
    popularFor: "Mumbai's Favourite Forest",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis totam, labore reiciendis quo numquam odio, soluta nisi aut officia deserunt. Vel quia sint ratione exercitationem soluta quam repellat dolorum!",
    time: "2-5 hours"
}, {
    image: img5,
    name: "Bolloywood Tours",
    popularFor: "Meet Indian's Biggest Movie Star",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis totam, labore reiciendis quo numquam odio, soluta nisi aut officia deserunt. Vel quia sint ratione exercitationem soluta quam repellat dolorum!",
    time: "2-3 hours"
}, {
    image: img6,
    name: "Mani Bhavan Mumbai",
    popularFor: "Gandhi peaceful abode in mumabi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis totam, labore reiciendis quo numquam odio, soluta nisi aut officia deserunt. Vel quia sint ratione exercitationem soluta quam repellat dolorum!",
    time: "1-2 hours"
}]

const Package = () => {

    // const {info} = useData();
    // console.log(info);


    const [visitSeason, setvisitSeason] = useState({
        WhatToExpect: "Breezy evenings and comfortable afternoons, especially near the sea.",
        ThingsYouLove: "Attending outdoor art festivals, trekking, shopping, beach hopping."
    });

    function handleClickDiv(divNo) {

        let div1 = document.getElementById('div1');
        let div2 = document.getElementById('div2');
        let div3 = document.getElementById('div3');


        if (divNo == 1) {
            setvisitSeason({
                WhatToExpect: "Breezy evenings and comfortable afternoons, especially near the sea.",
                ThingsYouLove: "Attending outdoor art festivals, trekking, shopping, beach hopping."
            });

            div1.style.borderBottom = '4px solid #58c431'
            div2.style.borderBottom = "none";
            div3.style.borderBottom = "none";

        } else if (divNo == 2) {
            setvisitSeason({
                WhatToExpect: "Days are hot but evenings are pleasant, with sea breeze.",
                ThingsYouLove: "Evening strolls near the sea, indulging in water sports."
            });

            div2.style.borderBottom = '4px solid #58c431'
            div1.style.borderBottom = "none";
            div3.style.borderBottom = "none";

        } else if (divNo == 3) {
            setvisitSeason({
                WhatToExpect: "Heavy rainfall with high humidity.",
                ThingsYouLove: "Escaping the crowds, road trips across Western Ghats."
            });

            div3.style.borderBottom = '4px solid #58c431'
            div1.style.borderBottom = "none";
            div2.style.borderBottom = "none";
        }
    }

    return (
        <div>
            <div className="border-2 border-black h-screen" style={{ background: 'no-repeat', backgroundSize: 'cover', background: `url(${p1})` }}>
                {/* <div className="flex justify-between mt-72">
                    <div className="border-2 border-black h-96 w-5/12">mumbai</div>
                    <div className="border-2 border-black w-5/12">picture</div>
                </div> */}
            </div>

            <div>
                <div className="shadow shadow-gray-500 rounded-lg  ml-24 mr-24 mt-20 p-5 border-black">
                    <div className="border-b border-black pt-10 pb-10 ml-10 mr-10 font-sans text-5xl font-bold text-orange-500">Things To See & Do</div>
                    <div className="shadow shadow-gray-700 rounded-lg bg-gray-100 m-10 p-5 flex flex-wrap">
                        {packageDetails.map(info =>
                            <PlaceCard picture={info.image} placeName={info.name} subName={info.popularFor} details={info.description} time={info.name} />
                        )}
                    </div>
                </div>

                <div className="shadow shadow-gray-500 rounded-lg ml-24 m-10 mr-24 p-5 border-black">
                    <div className='border-b border-black pt-8 pb-8 ml-10 mr-10'>
                        <h2 className='font-sans text-5xl font-bold text-orange-500'>Best Time To Visit Mumbai</h2>
                        <h3 className='font-sans text-3xl text-gray-500'>All through the year</h3>
                    </div>
                    <div className='shadow shadow-gray-700 rounded-lg bg-gray-100 m-10 p-5 flex flex-wrap'>
                        <div className='shadow shadow-gray-700z rounded-lg bg-white m-5 grow h-64'>
                            <div className="flex gap-4">
                                <div id="div1" onClick={() => handleClickDiv(1)} className="cursor-pointer border-b-4 border-green-500 p-5 grow text-center">
                                    <h2 className='font-extrabold text-3xl font-serif'>OCT-MAR</h2>
                                    <h3 className='font-semibold text-2xl text-gray-600'>peak Season</h3>
                                </div>
                                <div id="div2" onClick={() => handleClickDiv(2)} className="cursor-pointer p-5 grow text-center">
                                    <h2 className='font-extrabold text-3xl font-serif'>APR-JUN</h2>
                                    <h3 className='font-semibold text-2xl text-gray-600'>Moderate Season</h3>
                                </div>
                                <div id="div3" onClick={() => handleClickDiv(3)} className="cursor-pointer p-5 grow text-center">
                                    <h2 className='font-extrabold text-3xl font-serif'>JUL-SEP</h2>
                                    <h3 className='font-semibold text-2xl text-gray-600'>Off Season</h3>
                                </div>
                            </div>
                            <div className='p-5 mt-4'>
                                <h2 className='text-xl font-sarif'><span className='font-bold text-2xl'>What To Expect :</span>{visitSeason.WhatToExpect}</h2>
                                <h2 className='text-xl font-sarif'><span className='font-bold text-2xl'>Things You'll Love :</span>{visitSeason.ThingsYouLove}</h2>
                            </div>
                        </div>
                        <div className="shadow shadow-gray-700 rounded-lg bg-white m-5 w-2/6 h-64">
                            <div className='border-b-2 border-green-500 m-2 text-center'>
                                <h2 className='font-extrabold text-3xl font-serif p-5 uppercase'>festivals and events</h2>
                            </div>
                            <div className='text-2xl font-bold p-4 pl-8'>
                                <h2 className='m-2 font-serif'>Banganga Music Festival <span className='text-2xl text-gray-700'>January</span></h2>
                                <h2 className='m-2 font-serif'>Kala Ghoda Art Festival <span className='text-2xl text-gray-700'>Febrary</span></h2>
                                <h2 className='m-2 font-serif'>Navroz(Parsi New Year)  <span className='text-2xl text-gray-700'>March</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shadow shadow-gray-500 rounded-lg ml-24 mr-24 mb-14 p-5 border-black">
                    <div className='border-b border-black pt-8 pb-8 ml-10 mr-10 flex'>
                        <div className='border-2 border-black mr-5 mt-2 p-2 font-bold'>logo</div>
                        <div>
                            <h2 className='font-sans text-5xl font-bold text-orange-500'>Stay in Mumbai</h2>
                            <h3 className='font-sans text-3xl text-gray-500'>Recommended Options</h3>
                        </div>
                    </div>
                    <div className='shadow shadow-gray-700 rounded-lg bg-gray-100 m-10 p-5'>
                        <Staylist star={"3"} price={"$1000"} />
                        <Staylist star={"4"} price={"$2000"} />
                        <Staylist star={"5"} price={"$3000"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Package;