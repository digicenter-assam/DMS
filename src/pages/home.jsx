import React from "react";
import Navbar from "../components/Navbar";
import Catagories from "../components/Catagories";
import Shopbycategories from "../components/Shopbycategories";
import Ourservices from "../components/Ourservices";
import Homepagemenu from "../components/Homepagemenu";
import Homepagemenu2 from "../components/Homepagemenu2";
import FooterComponent from "../components/Footer";
import BestSellerComponent from "../components/BestSellers";
import SubscribeComponent from "../components/SubscribeComponent";
import ImageSlider from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="sticky">
        <Navbar />
        <Catagories />
      </div>
      <ImageSlider />
      <Shopbycategories />
      <BestSellerComponent />
      <Ourservices />
      <Homepagemenu />
      <Homepagemenu2 />
      <SubscribeComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
