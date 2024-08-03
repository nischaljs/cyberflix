import React from 'react'
import useGeminiSuggestedMovies from '../../hooks/useGeminiSuggestMovies'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GeminiSuggestedCards = ({suggestedMovies}) => {
    useGeminiSuggestedMovies(suggestedMovies);
    
    const geminiSuggestedMovies = useSelector((store)=>store.movies.geminiSuggestedMovies);

    
    
  return (
    <div className='bg-black p-4 overflow-hidden'>
    {geminiSuggestedMovies.map((suggestedList, index)=>(<div><MovieList key={index} listTitle={suggestedMovies[index]} moviesList={suggestedList?.results}/></div>))}
    </div>
  )
}

export default GeminiSuggestedCards