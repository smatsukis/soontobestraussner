
import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import { useState, useEffect } from "react";
import image1 from './assets/story-1.jpg';
import image2 from './assets/story-2.jpg';
import image3 from './assets/story-3.jpg';

function OurStory() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
 
      <>

      <NavBar/>
      <div className={`transition-opacity duration-1000 bg-champagne ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
<div className="container p-8">

  <Heading header="Our Story"/>
  <div className="grid grid-cols-1 gap-4">

  <div className="mb-5 flex">

<InfoCard includeImage={true} image={image1}>
<p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
                They were right! Opposite's do attract!
              </p>
              <hr className="border-t-4 border-champagne mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Classical musician meets coder</p>

  </InfoCard>

  </div>

  <div className="mb-5 flex">

<InfoCard includeImage={true} image={image2}>
<p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
                Heading 2 here
              </p>
              <hr className="border-t-4 border-champagne mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Mini write up here here for header 2</p>

  </InfoCard>

  </div>

  <div className="mb-5 flex">

<InfoCard includeImage={true} image={image3}>
<p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
                Heading 3 here
              </p>
              <hr className="border-t-4 border-champagne mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Mini write up here here for header 3</p>

  </InfoCard>

  </div>


  



</div>    
</div>
</div>

      </>
   
  );
}

export default OurStory;
