import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

import { FaStar } from "react-icons/fa";

const Searchpage = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const hotelsListData = useLoaderData();
  console.log(hotelsListData, typeof intId, intId);

  const idData = hotelsListData.find((hotel) => hotel.id === intId);
  console.log(idData);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl">stay in :{idData.name}</h1>
        <hr className="my-4 h-[1.5px] w-full bg-gray-400" />
        {idData.hotels.map((hotel) => (
          <div key={hotel._id} className="grid grid-cols-2 gap-3 my-12">
            <div className="hero col-span-full lg:col-span-1  bg-white border border-red-700">
              <div className="hero-content max-w-full  flex-col lg:flex-row">
                <div className="flex border-red-700">
                  <img
                    src={idData.img}
                    className="w-full h-full lg:w-[20rem] lg:h-[10rem] rounded-lg shadow-2xl"
                  />
                </div>
                <div className="text-gray-400">
                  <h3 className="text-base text-black font-semibold">
                    {hotel.description}
                  </h3>

                  <div className="flex space-x-2">
                    <h3> {hotel.amenities[0]} </h3>
                    <h3> {hotel.amenities[1]}</h3>
                    <h3>{hotel.amenities[2]}</h3>
                  </div>

                  <p>
                    price per night :{hotel.booking_details.price_per_night}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />{" "}
                    {hotel.reviews.rating}
                  </div>
                </div>
              </div>
            </div>
            <div className="googlemap col-span-full lg:col-span-1 border border-red-700">
              <h1>google map</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchpage;
