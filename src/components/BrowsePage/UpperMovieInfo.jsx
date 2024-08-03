import React from "react";

const UpperMovieInfo = ({ movie }) => {
  const { id, title, overview, vote_average } = movie;
  return (
    <div className="w-screen h-full absolute bottom-0 left-0 p-4 bg-black bg-gradient-to-r bg-opacity-70">
      <div className=" w-2/3 md:w-5/12 absolute left-4 bottom-8">
        <h4 className="font-bold mb-2 md:text-6xl text-2xl text-white ">{title}</h4>
        <p className="md:text-lg text-md text-white md:opacity-100 opacity-80 md:my-3">{overview}</p>
        <p className="text-yellow-400 font-bold text-md md:text-lg">
          Rating : {vote_average}
        </p>
        <div className="trailer-buttons flex items-center justify-start gap-5 mt-3">
          <button className="md:px-7 px-3 py-2 bg-white rounded-md text-center text-black font-bold hover:bg-slate-300">
            ▶ Play
          </button>
          <button className="md:px-7 px-3 py-2 bg-slate-600 rounded-md text-center text-white font-bold hover:bg-slate-300 hover:text-black">
            🇮 More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperMovieInfo;
