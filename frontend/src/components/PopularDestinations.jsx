import React from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    city: "New Delhi",
    state: "Delhi",
    properties: 4688,
    image:
      "https://images.unsplash.com/photo-1609258678760-ba05d9b95bb9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    properties: 1766,
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Goa",
    state: "Goa",
    properties: 4728,
    image:
      "https://images.unsplash.com/photo-1625125959362-304b1599a37f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    properties: 1401,
    image:
      "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    properties: 968,
    image:
      "https://images.unsplash.com/photo-1628068147323-4b27e9ac750d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    properties: 1527,
    image:
      "https://images.unsplash.com/photo-1570795876989-bcec725b8e72?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PopularDestinations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Popular Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            city={destination.city}
            state={destination.state}
            properties={destination.properties}
            image={destination.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
