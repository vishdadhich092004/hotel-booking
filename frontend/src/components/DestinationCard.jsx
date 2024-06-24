import React from "react";

const DestinationCard = ({ image, city, state, properties }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        className="w-full h-60 object-cover"
        src={image}
        alt={`${city} image`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{city}</div>
        <p className="text-gray-600">{state}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {properties} Properties
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
