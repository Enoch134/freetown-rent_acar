import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import FreetownCars from "../components/UI/FreetownCars";
import Province from "../components/UI/Province";
import Freetown from "../components/UI/Freetown";
import FreetownListing from "../pages/FreetownListing";
import ProvinceListing from "../pages/ProvinceListing";
import FreetownDetail from "../pages/FreetownDetail";
import ProvinceDetail from "../pages/ProvinceDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/freetownCars" element={<FreetownCars />} /> */}
      <Route path="/province" element={<ProvinceListing />} />
      <Route path="/province/:slug" element={<ProvinceDetail />} />
      <Route path="/freetown" element={<FreetownListing />} />
      <Route path="/freetown/:slug" element={<FreetownDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
