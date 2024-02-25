import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import { useState, useEffect } from "react";
import image1 from "./assets/story-1.jpg";
import image2 from "./assets/story-2.jpg";
import image3 from "./assets/story-3.jpg";
import image5 from "./assets/story-5.jpg";
import image6 from "./assets/story-6.jpg";
import image7 from "./assets/story-7.jpg";
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
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:flex gap-4">
            <div className="mb-5 xl:flex-1">
              <Carousel images={[image1, image2, image3, image5, image6, image7]} />
            </div>
            <div className="mb-5 xl:flex-1">
              <InfoCard includeImage={false}>
                <p className="mt-2 text-zinc-800">
                  Simone and Carl met at a braai and from then on it felt as if
                  it was (prepare for mushy cliche) love at first sight. The
                  dating days were so much fun and were mostly filled with
                  plenty of laughs, great conversation, amazing music,
                  questionable dance moves, plenty adventures, and so much love.
                  <br></br> <br></br>Life was so fun together and they enjoyed each other’s company
                  so much that they decided to move in together. They found a
                  place in Northcliff and signed the lease. One week before move
                  in, on the 25th of September, the windiest day in Johannesburg
                  history, Carl took Simone up to Northcliff hill. With hair
                  blowing everywhere (Simone’s) and barely being able to hear
                  each other due to the wind, Carlie pushed on and got his
                  guitar out. <br></br> <br></br>After playing a song, Carlie got down on one knee
                  and asked Simone to marry him. The tears started and did not
                  stop. Eventually, Carlie had to say, “take the ring before it
                  blows away!”. Safe to say the ring did not blow away, Simone
                  said yes, and the tears eventually stopped after 3 days.
                  Simone and Carl could not be happier and more in love, and
                  they can’t wait to celebrate the union of two families.
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
