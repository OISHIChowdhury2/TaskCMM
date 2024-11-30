import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import {Homepage} from './Components/HomePage/homepage'
import Footer  from './Components/Footer/Footer';
import Banner  from './Components/Banner/banner';

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Banner/>
        <Homepage />
    
        {/* <Routes>
        
          </Routes> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
