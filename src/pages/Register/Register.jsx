import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  // console.log(error);
  const { userSignUp } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const firstname = form.get("firstname");
    const lastname = form.get("lastname");
    const email = form.get("email");
    const password = form.get("password");
    setSuccess("");
    setError("");
    if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      return setError("please provide an valid email!!");
    }

    // console.log(firstname, email, lastname, password);

    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user careated successfully!!!");
        sendEmailVerification(result.user)
          .then(() => {
          alert('verify your account')
          })
        updateProfile(result.user, {
          displayName:firstname
        })
          .then(() => {
          console.log('profile updated', result.user)
          })
          .catch(error => {
          console.log(error)
        })
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="lg:max-w-7xl lg:mx-auto w-full h-full">
        <Navbar></Navbar>
        <div className="mx-3 md:mx-0 flex flex-col pt-2 space-y-7 items-center justify-center">
          <div className="card border border-gray-300 shrink-0 w-full rounded-md max-w-sm  bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className="font-semibold text-2xl">Create an account</h2>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  className="border-b-2 my-5 pb-2 focus:outline-none  font-bold text-black"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  className="border-b-2 my-5 pb-2 focus:outline-none  font-bold text-black"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Username or Email"
                  name="email"
                  className="border-b-2 my-5 pb-2 focus:outline-none  font-bold text-black"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border-b-2 pb-2 focus:outline-none   font-bold text-black"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confrim Passowrd"
                  className="border-b-2 pb-2 focus:outline-none   font-bold text-black"
                  required
                />
              </div>

              <div className="form-control mt-2">
                <button className="btn rounded-none btn-warning">
                  Create an account
                </button>
              </div>
              <p className="text-center">
                Already have an account?
                <Link to="/login">
                  <span className="border-b-2 border-yellow-500 text-yellow-500">
                    Please login
                  </span>
                </Link>
              </p>
              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </div>
          <div className="w-full  max-w-md flex items-center py-1 text-white ">
            <div className="flex-grow">
              <hr className="w-full bg-yellow-600 border-none h-[1px]" />
            </div>

            <h2 className="px-1">Or</h2>
            <div className="flex-grow">
              <hr className="w-full bg-yellow-600 border-none h-[1px]" />
            </div>
          </div>

          <div className="w-full max-w-md space-y-2">
            <button className="btn rounded-full btn-block  border-yellow-400 border-2">
              <FaFacebook className="text-blue-600 text-2xl" /> Continue with
              Facebook
            </button>
            <button className="btn rounded-full btn-block border-yellow-400 border-2">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
