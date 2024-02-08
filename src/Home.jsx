import { useState, useEffect } from 'react';
import NavLinkCustom from './components/NavLinkCustom';
import CountdownTimer from './components/Countdown';
import NavBar from './components/NavBar';
import homeImage from './assets/home.jpg';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    
      <div className="flex flex-col h-screen">
        <div className="relative flex-1 bg-cover bg-center font-paragraph" style={{ backgroundImage: `url(${homeImage})` }}>
          <NavBar/>
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-zinc-800">
            <h1 className="font-bold mb-4 font-heading tracking-heading text-6xl">SIMONE & CARL</h1>
            <p className="text-xl font-light">17 AUGUST 2024 - THE NUT FARM</p>
            <CountdownTimer/>
          </div>
          </div>
        </div>

      
      </div>
   
  );
}

export default Home;
