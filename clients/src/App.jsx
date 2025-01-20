import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import Product from "./Screen/Product";
import NikeHome from "./Screen/Nike/NikeHome";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nike" element={<NikeHome />} />
        <Route path="/prodcut/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
