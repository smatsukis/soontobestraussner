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
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-6 h-6 mr-2 mb-2 text-zinc-800"
                  />
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
                  <FontAwesomeIcon
                    icon={faBed}
                    className="w-6 h-6 mr-2 mb-2 text-zinc-800"
                  />

                  <span className="mt-0.5">Accomodation</span>
                </p>
                <p className="mt-2 text-zinc-800">
                  It would be advisable not to drive home as the road is bad at
                  night. If you are able to stay over, here are some
                  accomodation options, with links, near the venue:
                </p>
                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.airbnb.co.za/rooms/579473185664337002?source_impression_id=p3_1712663148_4pJq%2BmxAUZzk7GpO"
                    target="_blank"
                  >
                    The Berry Bee Accommodation
                  </a>
                </li>

                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.booking.com/hotel/za/damascus-bush-lodge.en-gb.html?aid=311984&label=damascus-bush-lodge-w%2AvBIYAINIf3SFtfVL87JAS275068831845%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-146342135830%3Akwd-312184482869%3Alp1028665%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXwxhKG0pUU-mcMVT-JwQpc&sid=b0374533fe2083fe45b78fd2fc0d83b9&dest_id=-1235846;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1712662962;srpvid=52ad525304f901d1;type=total;ucfs=1&#hotelTmpl"
                    target="_blank"
                  >
                    Damascus Bush and Mountain View Lodge
                  </a>
                </li>

                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.swiftchalets.co.za/"
                    target="_blank"
                  >
                    Little Swift
                  </a>
                </li>

                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.hollybrooke.co.za/accommodation"
                    target="_blank"
                  >
                   Hollybrooke Chalets & Bunkhouse
                  </a>
                </li>

                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://cradlehealthspa.co.za/accommodation/"
                    target="_blank"
                  >
                   Cradle Health Spa
                  </a>
                </li>
                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.labastide.co.za/our-cottages.html"
                    target="_blank"
                  >
                   La Bastide
                  </a>
                </li>

                <p className="mt-2 text-zinc-800">
                  There are also numerous BnBs extremely close by:
                </p>
                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.airbnb.co.za/s/Skeerpoort--South-Africa/homes?monthly_start_date=2024-05-01&monthly_length=3&monthly_end_date=2024-08-01&query=Skeerpoort%2C%20South%20Africa&place_id=EhhTa2VlcnBvb3J0LCBTb3V0aCBBZnJpY2EiLiosChQKEgkdztB4CCi-HhEUzq5VIMFfoBIUChIJURLu2YmmNBwRoOikHwxjXeg&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&date_picker_type=flexible_dates&flexible_trip_lengths%5B%5D=weekend_trip&flexible_trip_dates%5B%5D=august&source=structured_search_input_header&search_type=autocomplete_click"
                    target="_blank"
                  >
                   AirBnBs in/near Skeerpoort
                  </a>
                </li>

                <li className="py-1">
                  <a
                    className="underline hover:font-bold text-sm"
                    href="https://www.booking.com/searchresults.en-gb.html?ss=skeerpoort&ssne=Hartbeespoort&ssne_untouched=Hartbeespoort&highlighted_hotels=1167041&efdco=1&label=damascus-bush-lodge-w*vBIYAINIf3SFtfVL87JAS275068831845%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-146342135830%3Akwd-312184482869%3Alp1028665%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXwxhKG0pUU-mcMVT-JwQpc&sid=b0374533fe2083fe45b78fd2fc0d83b9&aid=311984&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=900060783&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=52ad525304f901d1&ac_meta=GhBkZjEzNTQxM2I3MTgwMmFjIAAoATICZW46CHNrZWVycG9vQABKAFAA&group_adults=2&no_rooms=1&group_children=0"
                    target="_blank"
                  >
                   Booking.com BnBs in/near Skeerpoort
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
                  Please could you RSVP by the 17th of June 2024 for catering
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
