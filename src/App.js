import React, { useEffect, useState } from "react";
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Router from './Components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      if (scrollY >= pageHeight - 60) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`App ${showFooter ? "scrolled-to-footer" : ""}`} >
      <Navbar />
      <div className='siteContent'>
      <Router />
      </div>
      <div className="site-footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
