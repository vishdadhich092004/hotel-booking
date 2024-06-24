import React from "react";

const SearchForm = () => {
  return (
    <div className="flex justify-center mt-10 px-4 h-40">
      <div className="bg-red-400 p-5 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="flex flex-wrap justify-between items-end space-y-4 md:space-y-0"></div>
        <div className="flex-1 text-white flex items-center justify-center">
          <span>Find and book your perfect stay</span>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-red-700 p-2 rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c.79 0 1.56.15 2.29.44m-1.64-2.95a7.97 7.97 0 00-2.61 1.24m-2.11 1.52a8.002 8.002 0 00-1.63 2.62m5.44 2.91c.42-.03.84-.1 1.24-.23m1.77-.58a8.007 8.007 0 002.58-1.61m1.25-1.75a7.977 7.977 0 001.23-2.63m-5.43 5.45a3 3 0 11-4.24-4.24 3 3 0 014.24 4.24z"
                ></path>
              </svg>
            </div>
            <span>Earn rewards on every night you stay</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-red-700 p-2 rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 16v-1a4 4 0 014-4h10a4 4 0 014 4v1m-6 4v-4m-4 0v4m-2-8h4m-2-8v8m4-8v8m-2-8a2 2 0 012-2h4a2 2 0 012 2v4"
                ></path>
              </svg>
            </div>
            <span>Save more with Member Prices</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-red-700 p-2 rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7h4M8 11h4m4 5v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1m16-4h-4m4 4h-4m4 4h-4"
                ></path>
              </svg>
            </div>
            <span>Free cancellation options if plans change</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
