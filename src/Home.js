import React from "react";
import Doglist from "./components/DogList/Doglist";
import Paginate from "./components/Paginate/Paginate";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";

import "./RootStyle.css";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Doglist />
      <Paginate />
      <Footer />
    </motion.div>
  );
}

export default Home;
