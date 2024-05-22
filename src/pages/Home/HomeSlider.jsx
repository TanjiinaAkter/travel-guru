import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeSlider = ({ selectedSlide }) => {
  console.log(selectedSlide);
  const sliceLength = 100;

  return (
    <div className=" space-y-7  mb-7  mt-12 col-span-full md:col-span-2  mx-7">
      <h1 className=" mb-4 text-3xl md:text-7xl font-semibold">
        {selectedSlide ? selectedSlide.name : "COXS BAZAR"}
      </h1>
      <p>
        {selectedSlide
          ? selectedSlide.description.slice(0, sliceLength) + '...'
          : "search"}
      </p>
      <Link to='/booking'>
      <button className="btn rounded-md btn-warning">
        Booking 
        <FaArrowRight />
      </button></Link>
    </div>
  );
};

export default HomeSlider;
