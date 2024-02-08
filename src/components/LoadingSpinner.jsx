// components/LoadingSpinner.js

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-zinc-800 flex justify-center items-center">
      <img
        src="/daisy.png"
        alt="Daisy"
        className="w-12 h-12 animate-spin animate-spin-slow"
      />
    </div>
  );
};

export default LoadingSpinner;
