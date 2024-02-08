import { useState, useEffect } from 'react';
import NavLinkCustom from './components/NavLinkCustom';
import CountdownTimer from './components/Countdown';
import NavBar from './components/NavBar';
import homeImage from './assets/home.jpg';
import LoadingSpinner from './components/LoadingSpinner';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (

    <>

    {loading ? (
<LoadingSpinner/>

    ): (
<div className="flex flex-col h-screen">
        <div className="relative flex-1 bg-cover bg-center font-paragraph" style={{ backgroundImage: `url(${homeImage})` }}>
          
          <NavBar/>
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-zinc-800">
            <h1 className="font-bold mb-4 font-heading tracking-heading lg:text-6xl xl:text-6xl text-3xl">SIMONE & CARL</h1>
            <p className="text-md font-light xl:text-xl text-xl">17 AUGUST 2024 - THE NUT FARM</p>
            <CountdownTimer/>
          </div>
          </div>
        </div>

      
      </div>

    )}
    
      
      </>
  );
}

export default Home;
