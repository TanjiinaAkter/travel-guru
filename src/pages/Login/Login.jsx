import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
const Login = () => {
  const { login, resetPassword, logout, google } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  // private route e navigate er moddhe state diye disi jar moddhe location.pathname ache , amra private route  e jete chaile amader login chara login page e  niye jabe sathe state ta show korbe ---ar jodi private route na hoye onno kothao je kono tay jete chaile state="null " dekhabe ====then login e click korle amra condition diye dibo j location.state thakle oi state  e redirect hobe noyto home page e redirect hobe
  const location = useLocation();
  const navigate = useNavigate()
  console.log('log in page location',location)
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const checked = e.target.check.checked;
    console.log(email, password);
    setError(null);
    setSuccessMessage(null);

    if (!checked) {
      return setError("please put checked first to login !!");
    }
    login(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccessMessage("you have Loged in successfully!!! ");
          // navigate to private route (serach destination)
          navigate(location?.state ? location.state : '/');
          e.target.reset();
        } else {
          setError("please verify in your account first to login");
          logout();
        }
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };

  /// HANDLE FORGET PASSWORD
  const emailRef = useRef(null);
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    resetPassword(email)
      .then(() => {
        alert("check email!!!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // HANDLE GOOGLE AUTHENTICATION
  const handleGoogleSignIn = () => {
    google()
      .then((result) => {
        navigate(location?.state? location.state : '/')
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="lg:max-w-7xl lg:mx-auto w-full h-full">
      <Navbar></Navbar>
      <div className="mx-3 md:mx-0 flex flex-col py-20 space-y-7 items-center justify-center">
        <div className="card border border-gray-300 shrink-0 w-full rounded-md max-w-md  bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <h2 className="font-semibold text-2xl">Login</h2>
            <div className="form-control">
              <input
                type="email"
                placeholder="Username or Email"
                name="email"
                ref={emailRef}
                className="border-b-2 my-5 pb-2 focus:outline-none  font-bold text-black"
                required
              />
            </div>
            <div className="form-control flex flex-row justify-between items-center relative">
              <input
                type={show ? "password" : "text"}
                name="password"
                placeholder="password"
                className="border-b-2 w-full pb-2 focus:outline-none   font-bold text-black"
                required
              />
              <span onClick={() => setShow(!show)}>
                {!show ? (
                  <FaEye className="absolute right-3 top-2" />
                ) : (
                  <IoEyeOff className="absolute right-3 top-2" />
                )}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" name="check" id="check" />
                <p className="pl-2">Remember Me</p>
              </div>
              <div>
                <p
                  onClick={handleForgetPassword}
                  className="border-b-2 cursor-pointer border-yellow-500 text-yellow-500">
                  Forgot Password
                </p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded-none btn-warning">Login</button>
            </div>
            <p className="text-center">
              Don’t have an account?
              <Link to="/register">
                <span className="border-b-2 border-yellow-500 text-yellow-500">
                  Create an account
                </span>
              </Link>
            </p>
            {error && <p className="text-red-600">{error}</p>}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
          </form>
        </div>
        <div className="w-full  max-w-md flex items-center py-1 text-white ">
          <div className="flex-grow">
            <hr className="w-full bg-yellow-600 border-none h-[1px]" />
          </div>

          <h2 className="px-4">Or</h2>
          <div className="flex-grow">
            <hr className="w-full bg-yellow-600 border-none h-[1px]" />
          </div>
        </div>

        <div className="w-full max-w-md space-y-2">
          <button className="btn rounded-full btn-block  border-yellow-400 border-2">
            {" "}
            <FaFacebook className="text-blue-600 text-2xl" /> Continue with
            Facebook
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn rounded-full btn-block border-yellow-400 border-2">
            {" "}
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
