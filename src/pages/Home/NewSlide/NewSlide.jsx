// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./NewSlide.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const NewSlide = ({onSlideClick}) => {
  const [destinations, setDestinations] = useState([]);
console.log(destinations)
  useEffect(() => {
    fetch("/hotelDetails.json")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  const handleSlideClick = (destination) => {
  onSlideClick(destination)
}
  return (
    <div className="col-span-full md:col-span-3 ">
      <Swiper
        className="md:w-full"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}>
        {destinations.map((destination) => (
          <SwiperSlide className="w-full rounded-lg relative" key={destination.id}>
            <img onClick={()=>handleSlideClick(destination)}
              className="w-full rounded-lg  h-full "
              src={destination.img}></img>
            <p className="absolute bottom-9 left-7 text-xl font-semibold">{ destination.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewSlide;
