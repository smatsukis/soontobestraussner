import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import Button from "./components/Button";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faChampagneGlasses, faGift, faHeart, faPenToSquare, faShirt } from '@fortawesome/free-solid-svg-icons';
import GoogleMap from "./components/GoogleMap";
import { useState, useEffect } from "react";


function TheDetails() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <NavBar />
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

      <div className="container p-8">
      
        <Heading header="The Details" />

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="mb-5 flex">
            <InfoCard>
              <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6 mr-2 text-stone-400" />
                Wedding Details
              </p>
              <hr className="border-t-2 border-stone-300 mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Date: 17 August 2024<br></br>
                Ceremony Time: 3pm<br></br>
                Location: The Nut Farm, Hartbeesport, South Africa</p>
                <GoogleMap/>
                <p className="mt-2 text-zinc-800">Please note that it is a dirt road leading up to the venue.</p>
            </InfoCard>
          </div>
          <div className="mb-5 flex">
            <InfoCard>
              <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
              <FontAwesomeIcon icon={faBed} className="w-6 h-6 mr-2 text-stone-400" />
                Accomodation
              </p>
              <hr className="border-t-2 border-stone-300 mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">It would be advisable not to drive home due to the night time road conditions. If you are able to stay over, here are some accomodation options near the venue:</p>
              <li><a className="underline hover:text-stone-400" href="https://www.cradlehealthspa.co.za/" target="_blank">Crade Health Spa - 5km away</a></li>
              <li><a className="underline hover:text-stone-400" href="https://www.cradlehealthspa.co.za/" target="_blank">xxxx</a></li>
            </InfoCard>
          </div>
          <div className="mb-5 flex">
            <InfoCard>
              <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
              <FontAwesomeIcon icon={faShirt} className="w-6 h-6 mr-2 text-stone-400" />
                Dress Code
              </p>
              <hr className="border-t-2 border-stone-300 mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Time to dust off that cocktail dress and try on your suit, please could we request formal attire is worn for this event. Uncomfortable shoes to be replaced with your dancing shoes at reception! </p>
            </InfoCard>
          </div>
          <div className="mb-5 flex">
            <InfoCard>
              <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
              <FontAwesomeIcon icon={faChampagneGlasses} className="w-6 h-6 mr-2 text-stone-400" />
                It's a Date Night!
              </p>
              <hr className="border-t-2 border-stone-300 mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Although we love your little ones, we think you need a night off! We regret no children.</p>
            </InfoCard>
          </div>
          <div className="mb-5 flex">
            <InfoCard>
              <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
              <FontAwesomeIcon icon={faPenToSquare} className="w-6 h-6 mr-2 text-stone-400" />
                RSVP
              </p>
              <hr className="border-t-2 border-stone-300 mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">Please could you RSVP by the 17th of July 2024 for catering purposes. If you haven't done so already, you can RSVP <a href="/rsvp" target="_blank" className="underline hover:text-stone-400">here!</a></p>
            </InfoCard>
          </div>
          <div className="mb-5 flex">
            <InfoCard>
              <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800 flex">
              <FontAwesomeIcon icon={faGift} className="w-6 h-6 mr-2 text-stone-400" />

                Gifts
              </p>
              <hr className="border-t-2 border-stone-300 mt-4 mb-4 w-full" />
              <p className="mt-2 text-zinc-800">The most important gift to us is your company on our special day. If you would like to give us a gift, a monetary contribution would be very appreciated!</p>
            </InfoCard>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default TheDetails;
