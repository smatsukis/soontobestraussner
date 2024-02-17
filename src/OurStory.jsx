import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import { useState, useEffect } from "react";
import image1 from "./assets/story-1.jpg";
import image2 from "./assets/story-2.jpg";
import image3 from "./assets/story-3.jpg";
import Carousel from "./components/Carousel";

function OurStory() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <NavBar />
      <div
        className={`transition-opacity duration-1000 bg-champagne ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container p-8 bg-champagne bg-cover bg-fixed min-h-screen">
          <Heading header="Our Story" />
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-5">
              <InfoCard includeImage={false}>
                <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex mb-3">
                  Heading 1 here
                </p>
                <p className="mt-2 text-zinc-800">
                  Mini write up here here for header 1
                </p>
              </InfoCard>
            </div>

            <div className="mb-5">
              <Carousel images={[image1, image2, image3]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
