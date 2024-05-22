import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/icons/Frame.jpg";
import { FaSearch } from "react-icons/fa";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import PropTypes from "prop-types";
const Navbar = ({ value }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(value);
  //==============  HANDLE PLACE start================//
  const searchRef = useRef(null);
  const handlePlace = () => {
    // e.preventDefault()

    const search = searchRef.current.value;
    // console.log(value, search);
    const matchSearch = value.find((val) =>
      val.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(matchSearch.name.toLowerCase(), search);
    if (matchSearch.name.toLowerCase() === search) {
      const id = matchSearch.id;
      navigate(`/placeid/${id}`);

      // console.log("c");
    }
  };

  //==============  HANDLE PLACE end================//

  const location = useLocation();
  // console.log(value[0].name)
  const logoutBtn = () => {
    logout();
  };
  // console.log(location.pathname);
  const links = (
    <>
      <li>
        <NavLink className="pl-[1.5rem]" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="pl-[1.5rem]" to="/destination">
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink className="pl-[1.5rem]" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="pl-[1.5rem]" to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        {user ? (
          <div className=" ">
            <p>{user.displayName}</p>
            <button onClick={logoutBtn} className="btn btn-warning">
              Sign Out
            </button>
          </div>
        ) : (
          <button className="bg-yellow-500 px-4 py-2 w-auto text-black font-semibold">
            <NavLink className="pl-[1.5rem]" to="/login">
              Login
            </NavLink>
          </button>
        )}
      </li>
    </>
  );
  const location2 = useLocation();
  const isHomeorBooking =
    location2.pathname === "/" || location2.pathname === "/booking";
  return (
    <div
      className={`navbar  font-semibold ${
        isHomeorBooking ? "bg-transparent text-white" : "bg-white text-black"
      }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu flex-nowrap menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            {links}
          </ul>
        </div>

        <a className=" text-xl">
          <img className="w-[5rem] md:w-[7rem] text-white" src={logo} alt="" />
        </a>
      </div>
      {location.pathname !== "/" ? (
        ""
      ) : (
        <div className="flex-1 lg:navbar-center">
          <div className="form-control relative">
            <span onClick={handlePlace}>
              <FaSearch className="absolute top-5 "></FaSearch>
            </span>
            <input
              type="text"
              placeholder="Search your destination"
              name="search"
              ref={searchRef}
              className="input w-full md:w-[370px] border-white focus:border-white  pl-6 bg-transparent"
            />
          </div>
        </div>
      )}
      <div className="hidden lg:flex lg:navbar-end w-auto">
        <ul className="menu flex-nowrap flex-row flex items-center menu-horizontal">
          {links}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Navbar;
