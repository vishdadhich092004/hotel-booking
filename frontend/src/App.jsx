import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import NewHotelPage from "./pages/NewHotelPage";
import EditHotelPage from "./pages/EditHotelPage";
import HotelDetailPage from "./pages/HotelDetailPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/hotels/new" element={<NewHotelPage />} />
          <Route path="/hotels/:id/edit" element={<EditHotelPage />} />
          <Route path="/hotels/:id" element={<HotelDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
