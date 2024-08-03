import React, { useState } from 'react';
import model from '../../utils/gemini';
import GeminiSearchInput from './GeminiSearchInput';
import GeminiSuggestedCards from './GeminiSuggestedCards';
import Loader from './Loader';

const GeminiSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `Please provide the names of 5 movies based on the following query: [${query}]. Respond only with the movie names separated by commas, with no additional text. For example: homelander, solay, rabta, batman, spiderman`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setResults(text.trimEnd().split(','));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults(['Error fetching data']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <GeminiSearchInput query={query} setQuery={setQuery} onSubmit={handleSearch} />
      {loading && <Loader />}
      {results.length > 0 && !loading && <GeminiSuggestedCards suggestedMovies={results} />}
    </div>
  );
};

export default GeminiSearchPage;
