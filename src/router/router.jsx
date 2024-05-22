import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Booking from "../pages/Home/Booking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Searchpage from "../pages/SearchPage/Searchpage";
import PrivateRoute from "./PrivateRoute";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("hotelDetails.json"),
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/placeid/:id",
        element: <PrivateRoute><Searchpage></Searchpage></PrivateRoute> ,
        loader:()=> fetch('/hotelDetails.json')
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
