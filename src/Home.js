import React from "react";
import Search from "./components/Search/Search";
import Doglist from "./components/DogList/Doglist";
import Paginate from "./components/Paginate/Paginate";
import Footer from "./components/Footer/Footer";

import "./RootStyle.css";

function Home() {
  return (
    <>
      <Search />
      <Doglist />
      <Paginate />
      <Footer />
    </>
  );
}

export default Home;
