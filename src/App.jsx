// App.js

import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Animations from "./Animations";
import Designs from "./Designs";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [color, setColor] = useState("");
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname;
    if (route === '/About') {
      setColor('red');
    } else if (route === '/Animations') {
      setColor('green');
    } else {
      setColor(''); // Reset color if URL doesn't match any condition
    }
  }, [location.pathname]);

  return (
    <>
      <div className="site-wrapper">
        <Header color={color} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/designs" element={<Designs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
