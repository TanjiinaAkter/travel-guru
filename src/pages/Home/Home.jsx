import { useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import HomeSlider from "./HomeSlider";
import NewSlide from "./NewSlide/NewSlide";
import { useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const loadData = useLoaderData();
  console.log(loadData)
  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
  };
  const location = useLocation()
  const locationPath = location.pathname === '/' || location.pathname === '/booking';
  return (
    <div className={`lg:max-w-full lg:mx-auto   w-full lg:h-[100vh] ${locationPath? 'bg-home-bg bg-cover w-full bg-no-repeat' : 'bg-none'}`}>
      <Navbar value= {loadData}></Navbar>
      <div
        className="grid grid-cols-5    lg:mt-36 md:space-x-7  text-white  justify-center
     items-center  mb-40">
        <HomeSlider selectedSlide={selectedSlide}></HomeSlider>
        <NewSlide onSlideClick={handleSlideClick}></NewSlide>
      </div>
    </div>
  );
};

export default Home;
