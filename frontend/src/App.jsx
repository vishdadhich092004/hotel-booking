import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewHotelPage from "./pages/NewHotelPage";
import HotelDetailPage from "./pages/HotelDetailPage";
import EditHotelPage from "./pages/EditHotelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/new" element={<NewHotelPage />} />
        <Route path="/hotels/:id" element={<HotelDetailPage />} />
        <Route path="/hotels/:id/edit" element={<EditHotelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
