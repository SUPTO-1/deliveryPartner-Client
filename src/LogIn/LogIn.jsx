import { CiLock } from "react-icons/ci";
import logo from "../assets/bankLogo.png";
import image from "../assets/login.jpg";

const LogIn = () => {
  return (
    <div className="w-3/4 mx-auto mt-10 lg:mt-32 lg:flex lg:gap-64">
      <div className="hidden md:block">
        <div>
          <div className="flex gap-2">
            <img className="w-12" src={logo} alt="Bank Logo" />
            <h1 className="text-2xl font-blackOp mt-2">
              United Online Banking
            </h1>
          </div>
          <img className="h-[500px]" src={image} alt="Login Visual" />
        </div>
      </div>
      <div className="flex-1 lg:text-center">
        <p className="mb-12 lg:text-right font-montserrat">
          <CiLock className="inline text-lg" /> you are logged into a secure
          site
        </p>
        <h2 className="text-2xl font-montserrat">
          Welcome to United Online Banking
        </h2>
        <p className="mt-4 mb-16 font-poppins">
          If you don't have an account{" "}
          <a className="text-[#25a244]" href="">
            Register
          </a>
        </p>
        <div className="mb-5">
          <h2 className="text-left mb-2 text-[#072d76] font-semibold font-poppins">Email</h2>
          <div className="input-container md:w-3/4 border-2 p-2 rounded-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow focus:outline-none input-bordered "
              placeholder="Phone or Email"
            />
          </div>
        </div>
        <label className="">
          <h2 className="text-left text-[#072d76] mb-2 font-semibold font-poppins">Password</h2>
          <div className="input-container mb-2 md:w-3/4 border-2 p-2 rounded-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow focus:outline-none input-bordered "
              placeholder="Password"
            />
          </div>
        </label>
        <div className="text-left mt-8">
          <button className="btn bg-[#072d76] font-roboto text-white text-xl w-full md:w-3/4">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
