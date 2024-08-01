import React from 'react'

const UpperMovieInfo = ({movie}) => {
    const{id,title, overview, vote_average} = movie;
  return (
    <div className='w-5/12 absolute bottom-0 left-0 p-4 ml-5'>
        <h4 className='font-bold mb-2 text-6xl text-white'>{title}</h4>
        <p className='text-lg text-white my-3'>{overview}</p>
        <p className='text-yellow-400 font-bold text-lg'>Rating : {vote_average}</p>
        <div className="trailer-buttons flex items-center justify-start gap-5 mt-3">
            <button className='px-7 py-2 bg-white rounded-md text-center text-black font-bold'>▶ Play</button>
            <button className='px-7 py-2 bg-slate-600 rounded-md text-center text-white font-bold'>🇮 More Info</button>
        </div>
    </div>
  )
}

export default UpperMovieInfo