import { useState, useEffect } from "react";

export default function HorizontalRule({ children, ...props }) {
  const [flowerImages, setFlowerImages] = useState([]);

  useEffect(() => {
    const daisyImages = ["/daisy1.png", "/daisy2.png", "/daisy3.png"];
    const shuffledDaisyImages = shuffleArray(daisyImages);
    setFlowerImages(shuffledDaisyImages);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full flex justify-end lg:space-x-4 xl:space-x-4 z-0">
        <img src={flowerImages[0]} alt="Daisy" className="w-20 h-20 mb-1 hidden sm:block" />
        <img src={flowerImages[1]} alt="Daisy" className="w-20 h-20 mb-1" />
        <img src={flowerImages[2]} alt="Daisy" className="w-20 h-20 mb-1" />
      
      </div>
      <hr className="border-t-4 border-zinc-800" />
    </div>
  );
}
