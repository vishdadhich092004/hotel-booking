import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditHotelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    availableRooms: "",
    amenities: "",
    images: "",
  });
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          ...data,
          amenities: data.amenities.join(","),
          images: data.images.join(","),
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/hotels/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => navigate(`/hotels/${id}`));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </label>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </label>
        <label className="block mb-2">
          Available Rooms:
          <input
            type="number"
            name="availableRooms"
            value={formData.availableRooms}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </label>
        <label className="block mb-2">
          Amenities (comma-separated):
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </label>
        <label className="block mb-4">
          Images (comma-separated URLs):
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
          Update Hotel
        </button>
        <button
          type="button"
          onClick={handleGoBack}
          className="px-4 py-2 bg-gray-500 text-white"
        >
          Go Back
        </button>
      </form>
    </div>
  );
}

export default EditHotelPage;
