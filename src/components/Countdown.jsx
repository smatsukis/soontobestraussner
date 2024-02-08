import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const targetDate = new Date('2024-08-17T15:00:00');

  // Calculate the initial time remaining
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const difference = targetDate - currentTime;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);


    return () => clearInterval(timer);
  }, []);


  return (
    <div className="pt-3 rounded-lg font-paragraph uppercase">
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-8">
          <p className="lg:text-4xl xl:text-4xl text-2xl font-bold">{timeRemaining.days}</p>
          <p className="text-sm">Days</p>
        </div>
        <div className="flex flex-col items-center mr-8">
          <p className="lg:text-4xl xl:text-4xl text-2xl font-bold">{timeRemaining.hours}</p>
          <p className="text-sm">Hours</p>
        </div>
        <div className="flex flex-col items-center mr-8">
          <p className="lg:text-4xl xl:text-4xl text-2xl font-bold">{timeRemaining.minutes}</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="flex flex-col items-center mr-8">
          <p className="lg:text-4xl xl:text-4xl text-2xl font-bold">{timeRemaining.seconds}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
