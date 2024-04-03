import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

import Package from './Pages/Package/Package';
import Gallery from './Pages/Gallery/Gallery';
import Explore from './Pages/Explore/Explore';
// import { DataProvider } from './context/package';

function App() {
  return (

    <div>
      <Navbar />
      {/* <DataProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signup />} />

        <Route path="/explore" element={<Explore />} />
        
          <Route path="packages">
            <Route path="mumbai" element={<Package />} />
          </Route>

        <Route path="gallery">
          <Route path="city1" element={<Gallery />} />
        </Route>
      </Routes>
      {/* </DataProvider> */}
      <Footer />
    </div>

  );
}

export default App;
