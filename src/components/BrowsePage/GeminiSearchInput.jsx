import React from 'react';

const GeminiSearchInput = ({ query, setQuery, onSubmit }) => {
  return (
    <div className="flex pt-60 md:pt-0 px-4 md:items-center justify-center min-h-screen" style={{ backgroundImage: "url(/banner.jpg)" }}>
      <form onSubmit={onSubmit} className="relative w-full max-w-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="What would you like to watch today ?..."
        />
        <div className=" w-fit h-fit bg-gray-300 p-3 m-3 rounded-xl">
            <img src="/Google_Gemini_logo.png" alt="Google Gemini Logo" className="h-8" />
          </div>
      </form>
    </div>
  );
};

export default GeminiSearchInput;
