import mobile from "../assets/images/mobile.png";
import { FaGooglePlay } from "react-icons/Fa";
import { FaApple } from "react-icons/Fa";
import "../AllCss/Login.css";
import { Link } from "react-router-dom";
const Application = () => {
  return (
    <div className="appContainer mb-10 text-gray-300 font-philosopher">
      <div className="flex flex-col lg:flex justify-between lg:flex-row-reverse items-center">
        <div className="text-center  flex flex-col gap-5 lg:text-left">
          <p className="text-xl font-semibold ">MOBILE APPLICATION</p>
          <h1 className="text-2xl lg:text-6xl font-semibold ">
            DOWNLOAD <br /> OUR APPLICATION
          </h1>
          <p className="text-1xl font-semibold font-opensens">
            Elevate your dining experience with our restaurant app. Explore
            diverse menus, book tables, order delivery, enjoy exclusive
            discounts, and accumulate loyalty rewards for a culinary journey
            like no other.
          </p>
          <div className="m lg:flex lg:gap-10">
            <Link
              to="https://play.google.com/store/apps/details?id=co.restrox.app"
              target="_blank"
            >
              {" "}
              <button className="w-52 pl-8 border-2 border-[#FF772D] lg:px-16 lg:w-72 py-2 flex items-center gap-3 text-xl hover:bg-[#ff3811] mb-5">
                <FaGooglePlay></FaGooglePlay> <span>PLAY STOR</span>
              </button>
            </Link>
            <Link to="https://www.apple.com/store" target="_blank">
              <button className="w-52 pl-6 border-2 border-[#FF772D] lg:px-16 lg:w-72 py-2 flex items-center gap-3 text-xl hover:bg-[#ff3811] ">
                <FaApple></FaApple> <span> APPLE STORE</span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Application;
