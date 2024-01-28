import { useState, useEffect } from 'react';
import NavLinkCustom from './components/NavLinkCustom';
import CountdownTimer from './components/Countdown';
import NavBar from './components/NavBar';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col h-screen">
        <div className="relative flex-1 bg-cover bg-center font-minimal" style={{ backgroundImage: 'url(src/assets/home.jpg)' }}>
          <NavBar/>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-zinc-800">
            <h1 className="font-bold mb-4 font-cursive text-6xl">Simone & Carl</h1>
            <p className="text-2xl">17 August 2024 - The Nut Farm</p>
            <CountdownTimer/>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Home;
