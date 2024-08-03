import React from 'react';
import { IMAGE_URL } from '../../utils/constants';

const MovieCard = ({ data }) => {
  const { poster_path, title } = data;
  if(!poster_path){
    return
  }

  return (
    <div className="cursor-pointer m-4 w-32 h-48 md:w-48 md:h-72 flex-shrink-0 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-full object-cover"
        src={`${IMAGE_URL}${poster_path}`}
        alt={title}
        loading="lazy"
      />
      <div className="text-center text-white p-2 bg-black bg-opacity-50">
        <p>{title}</p>
      </div>
    </div>
  );
};



export default MovieCard;
