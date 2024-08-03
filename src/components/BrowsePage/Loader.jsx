import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 w-full h-full">
    <p className="text-6xl text-white">Loading...</p>
  </div>
);

export default Loader;
