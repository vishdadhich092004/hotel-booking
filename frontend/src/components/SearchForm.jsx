import React from "react";

const SearchForm = () => {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="flex flex-wrap justify-between items-end space-y-4 md:space-y-0">
          <div className="flex flex-col flex-grow md:flex-grow-0">
            <label className="font-bold">Destination</label>
            <input
              type="text"
              value="Goa"
              readOnly
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col flex-grow md:flex-grow-0">
            <label className="font-bold">Check-in</label>
            <input
              type="date"
              value="Fri, 21 Jun"
              readOnly
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col flex-grow md:flex-grow-0">
            <label className="font-bold">Check-out</label>
            <input
              type="date"
              value="Sat, 22 Jun"
              readOnly
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col flex-grow md:flex-grow-0">
            <label className="font-bold">Rooms & Guests</label>
            <input
              type="text"
              value="1 Room, 2 Guests"
              readOnly
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex items-end w-full md:w-auto md:ml-auto">
            <button className="bg-yellow-300 text-zinc-900 font-bold py-2 px-4 rounded w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
