import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
