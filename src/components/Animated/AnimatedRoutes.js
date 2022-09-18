import React from "react";
import Home from "../../Home";
import Detail from "../../components/Detail/Detail";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/dogs/:dog_id" element={<Detail />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
