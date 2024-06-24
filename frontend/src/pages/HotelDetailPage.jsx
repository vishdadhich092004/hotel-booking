import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => setHotel(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/hotels/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{hotel.name}</h1>
      <p>Location: {hotel.location}</p>
      <p>Price: ${hotel.price}</p>
      <p>Available Rooms: {hotel.availableRooms}</p>
      <p>Amenities: {hotel.amenities.join(", ")}</p>
      <div>
        <h2 className="text-xl font-bold mt-4">Images</h2>
        <div className="flex space-x-4">
          {hotel.images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Hotel ${index}`}
              className="w-1/4"
            />
          ))}
        </div>
      </div>
      <Link to={`/hotels/${hotel._id}/edit`} className="text-blue-500">
        Edit Hotel
      </Link>
      <button onClick={handleDelete} className="ml-4 text-red-500">
        Delete Hotel
      </button>
      <button
        type="button"
        onClick={handleGoBack}
        className="px-4 py-2 bg-gray-500 text-white"
      >
        Go Back
      </button>
    </div>
  );
}

export default HotelDetailPage;
