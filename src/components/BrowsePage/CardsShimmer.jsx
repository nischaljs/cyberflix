import React from 'react';

const CardsShimmer = () => {
  return (
    <div className='m-4 w-64 h-96 flex-shrink-0 border-2 border-blue-500 rounded-lg shadow-lg overflow-hidden'>
      <div className='w-full h-80 bg-gray-300 animate-pulse'></div>
      <div className='p-2 bg-gray-300 animate-pulse'></div>
    </div>
  );
};

export default CardsShimmer;
