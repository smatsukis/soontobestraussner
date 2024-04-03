import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import Button from "./components/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faChampagneGlasses,
  faGift,
  faHeart,
  faPenToSquare,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
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
      <div
        className={`bg-champagne bg-cover bg-fixed transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container p-8 text-zinc-800">
          <Heading header="The Details" />

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="mb-5 flex">
              <InfoCard>
                <p className="block text-lg leading-tight font-bold flex">
                  <FontAwesomeIcon icon={faHeart} className="w-6 h-6 mr-2 mb-2 text-zinc-800" />
                 <span className="mt-0.5">Wedding Details</span> 
                </p>
               

                <p className="mt-2">
                  Date: 17 August 2024<br></br>
                  Ceremony Time: 3pm<br></br>
                  Location: The Nut Farm, Hartbeesport, South Africa
                </p>
                <GoogleMap />
                <p className="mt-2">
                  Please note that it is a dirt road leading up to the venue.
                </p>
              </InfoCard>
            </div>
            <div className="mb-5 flex">
              <InfoCard>
                <p className="block text-lg leading-tight font-bold flex">
                  <FontAwesomeIcon icon={faBed} className="w-6 h-6 mr-2 mb-2 text-zinc-800" />
                  
                  <span className="mt-0.5">Accomodation</span> 
                </p>
                <p className="mt-2 text-zinc-800">
                  It would be advisable not to drive home as the road is bad at night. If you are able to stay over, here are some
                  accomodation options near the venue:
                </p>
                <li>
                  <a
                    className="underline hover:font-bold"
                    href="https://www.cradlehealthspa.co.za/"
                    target="_blank"
                  >
        
                    Crade Health Spa - 5km away
                  </a>
                </li>
                <li>
                  <a
                    className="underline hover:font-bold"
                    href="https://www.cradlehealthspa.co.za/"
                    target="_blank"
                  >
                    xxxx
                  </a>
                </li>
              </InfoCard>
            </div>
            <div className="mb-5 flex">
              <InfoCard>
                <p className="block text-lg leading-tight font-bold flex">
                  <FontAwesomeIcon
                    icon={faShirt}
                    className="w-6 h-6 mr-2 text-zinc-800 mb-2"
                  />
                  
                  <span className="mt-0.5">Dress Code</span> 
                </p>
                <p className="mt-2">
                  Time to dust off that cocktail dress and try on your suit,
                  please could we request formal attire is worn for this event.
                  Uncomfortable shoes to be replaced with your dancing shoes at
                  reception!{" "}
                </p>
              </InfoCard>
            </div>
            <div className="mb-5 flex">
              <InfoCard>
                <p className="block text-lg leading-tight font-bold flex">
                  <FontAwesomeIcon
                    icon={faChampagneGlasses}
                    className="w-6 h-6 mr-2 text-zinc-800 mb-2"
                  />
                  
                  <span className="mt-0.5">It's a Date Night!</span> 
                </p>
                <p className="mt-2">
                  Although we love your little ones, we think you need a night
                  off! We regret no children.
                </p>
              </InfoCard>
            </div>
            <div className="mb-5 flex">
              <InfoCard>
                <p className="block text-lg leading-tight font-bold flex">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="w-6 h-6 mr-2 text-zinc-800 mb-2"
                  />
                  
                  <span className="mt-0.5">RSVP</span> 
                </p>
                <p className="mt-2">
                  Please could you RSVP by the 17th of July 2024 for catering
                  purposes. If you haven't done so already, you can RSVP{" "}
                  <a
                    href="/rsvp"
                    target="_blank"
                    className="underline hover:text-zinc-800"
                  >
                    here!
                  </a>
                </p>
              </InfoCard>
            </div>
            <div className="mb-5 flex">
              <InfoCard>
                <p className="block text-lg leading-tight font-bold flex">
                  <FontAwesomeIcon
                    icon={faGift}
                    className="w-6 h-6 mr-2 text-zinc-800 mb-2"
                  />
                  
                  <span className="mt-0.5">Gifts</span> 
                </p>
                <p className="mt-4">
                  The most important gift to us is your company on our special
                  day. If you would like to give us a gift, a monetary
                  contribution would be very appreciated!
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheDetails;
