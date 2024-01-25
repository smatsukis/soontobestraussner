import { useState, useEffect } from 'react';
import NavLinkCustom from './components/NavLinkCustom';
import NavBar from './components/NavBar';


function Home() {

  return (
    <>
    <div className="relative bg-cover bg-center h-screen font-minimal transition ease-in duration-1000" style={{ backgroundImage: 'url(src/assets/home.jpg)' }}>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-zinc-800">
        <h1 className="font-bold mb-4 font-cursive text-6xl">Simone & Carl</h1>
        <p className="text-2xl">17 August 2024 - The Nut Farm</p>
       
  
      <nav className="flex space-x-4 pt-2">
        <NavLinkCustom to="/our-story">Our Story</NavLinkCustom>
        <NavLinkCustom to="/details">The Details</NavLinkCustom>
        <NavLinkCustom to="/rsvp">RSVP</NavLinkCustom>
      </nav>

      

      
  
        </div>
        </div>

        
        

     
    </>
  );
}

export default Home;
