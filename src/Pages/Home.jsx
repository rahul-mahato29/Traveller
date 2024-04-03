import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { useState ,useEffect} from 'react';
import adVideo1 from '../components/Assets/vid-1.mp4';
import adVideo2 from '../components/Assets/vid-2.mp4';
import adVideo3 from '../components/Assets/vid-3.mp4';
import adVideo4 from '../components/Assets/vid-4.mp4';
import adVideo5 from '../components/Assets/vid-5.mp4';
import Bookings from '../components/Bookings/Bookings';
import Tourpackage from '../components/Tourpackage/Tourpackage';
import Tourservices from '../components/Tourservices/Tourservices';
import Tourgallery from '../components/Tourgallery/Tourgallery';
import Tourreview from '../components/Tourreview/Tourreview';
import Contact from '../components/Contact/Contact';
// import { DataProvider } from '../context/package';

const Home = () => {

  const videoSources = [adVideo1,adVideo2,adVideo3,adVideo4,adVideo5];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 5000); 

    return () => clearTimeout(timeout); // Clean up the timeout on unmount or before next effect run
  }, [currentVideoIndex, videoSources.length]);

  return (
    <div>
      <section className="home" id="home">

        <div className="home-content">
          <h3>adventure is worthwhile</h3>
          <p>discover new places with us, adventure awaits</p>
          {/* <a className="btn">discover more</a> */}
          <Link to="/explore">
          <button className='home-btn'>Discover More</button>
          </Link>
        </div>

        <div className="controls">
          <span className="vid-btn active" data-src={adVideo1} onClick={()=>setCurrentVideoIndex(0)} style={{ backgroundColor: currentVideoIndex === 0 ? 'orange' : '' }}></span>
          <span className="vid-btn" data-src={adVideo2} onClick={()=>setCurrentVideoIndex(1)} style={{ backgroundColor: currentVideoIndex === 1 ? 'orange' : '' }}></span>
          <span className="vid-btn" data-src={adVideo3} onClick={()=>setCurrentVideoIndex(2)} style={{ backgroundColor: currentVideoIndex === 2 ? 'orange' : '' }}></span>
          <span className="vid-btn" data-src={adVideo4} onClick={()=>setCurrentVideoIndex(3)} style={{ backgroundColor: currentVideoIndex === 3 ? 'orange' : '' }}></span>
          <span className="vid-btn" data-src={adVideo5} onClick={()=>setCurrentVideoIndex(4)} style={{ backgroundColor: currentVideoIndex === 4 ? 'orange' : '' }}></span>
        </div>

        <div className="video-container">
          <video src={videoSources[currentVideoIndex]} id="video-slider" autoPlay loop muted ></video>
        </div>

      </section>
      <Bookings/>
      {/* <DataProvider> */}
      <Tourpackage/>
      {/* </DataProvider> */}
      <Tourservices/>
      <Tourgallery/>
      <Tourreview />
      <Contact />
    </div>
  );
}

export default Home;
