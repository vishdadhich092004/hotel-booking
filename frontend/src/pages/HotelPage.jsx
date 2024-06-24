import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelPage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels List</h1>
      <Link to="/hotels/new" className="text-blue-500">
        Create New Hotel
      </Link>
      <ul className="mt-4">
        {hotels.map((hotel) => (
          <li key={hotel._id} className="mb-2">
            <Link to={`/hotels/${hotel._id}`} className="text-blue-500">
              {hotel.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelPage;
