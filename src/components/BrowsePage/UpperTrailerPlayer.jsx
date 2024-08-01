import React from 'react'
import BackgroundTrailer from './BackgroundTrailer'
import UpperMovieInfo from './UpperMovieInfo'

const UpperTrailerPlayer = ({movie}) => {
    
  return (
    <div className='absolute'>
        <BackgroundTrailer id={movie.id}/>
        <UpperMovieInfo movie={movie}/>
    </div>
  )
}

export default UpperTrailerPlayer