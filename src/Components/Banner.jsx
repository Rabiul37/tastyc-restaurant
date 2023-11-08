import { BsArrowRightShort } from "react-icons/Bs";
import { BsArrowLeftShort } from "react-icons/Bs";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import design2 from "../assets/images/design2.png";
import Navber from "./Navber";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full h-[100vh] rounded" />
          <div className="absolute  h-full  w-full bg-gradient-to-r from-[#151515] to-[#00000033]">
            <div className=" w-full absolute top-0 font-philosopher">
              <Navber></Navber>
            </div>
            <div className="absolute top-40 left-20   lg:top-20 lg:left-[180px]">
              <div className="flex flex-col items-center justify-center ml-12 lg:mb-5">
                <div className="h-2 w-20 outline-none bg-[#fac967] text-center mb-3">
                  {" "}
                </div>
                <h1 className="font-semibold tracking-wider text-[#E5EBEF] font-philosopher">
                  Hellow, friend
                </h1>
                <h1 className="text-2xl font-semibold tracking-wider text-[#E5EBEF] font-philosopher">
                  Welcome to
                </h1>
              </div>
              <h1 className=" text-7xl font-semibold lg:text-9xl text-center tracking-wider  text-[#fdce6f] font-philosopher ml-8">
                Tastyc <br />{" "}
              </h1>
              <h1 className=" text-[#E5EBEF] text-2xl text-center lg:text-7xl font-semibold font-philosopher  lg:mt-10">
                {" "}
                Where Every Bite Tells a Story
              </h1>
              <div className="flex items-center justify-center mt-5">
                <Link to="/allfood">
                  <button className=" w-40 border-2 border-gray-100  px-6 py-1 text-gray-100 font-opensens text-xl font-semibold hover:bg-[#030303d0] hover:text-white hover:border-gray-100 rounded-md ">
                    Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute transform -translate-y-1/2  left-16 right-5 bottom-12">
            <div className="flex justify-start ">
              <a
                href="#slide3"
                className=" text-white text-4xl hover:scale-125 hover:text-[#ffd24a] duration-300 mr-3"
              >
                <BsArrowLeftShort></BsArrowLeftShort>
              </a>
              <a
                href="#slide2"
                className="text-white text-4xl hover:scale-125 hover:text-[#ffd24a] duration-300"
              >
                <BsArrowRightShort></BsArrowRightShort>
              </a>
            </div>
            <img src={design2} alt="" />
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-[100vh] rounded" />
          <div className="absolute    h-full  w-full bg-gradient-to-r from-[#050505] to-[rgba(21, 21, 21, 0.00)]">
            <div className=" w-full absolute top-0 font-philosopher">
              <Navber></Navber>
            </div>
            <div className="flex flex-col gap-8 absolute top-32 left-16">
              <h1 className="text-6xl text-[#ffd24a] font-semibold font-philosopher  ml-8">
                Experience Gastronomic <br /> Delights at{" "}
                <span className="text-gray-100">Tastyc .</span>
              </h1>
              <h2 className="text-xl hidden font-opensens font-semibold text-gray-100 lg:block ml-8">
                Juicy, tender, and perfectly seared, our grilled steak is a
                carnivores dream. <br /> Each succulent bite is bursting with
                smoky flavors and a hint of char.
              </h2>
              <div className="ml-8">
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Discover More
                </button>
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Latest Food
                </button>
              </div>
            </div>
          </div>
          <div className="absolute transform -translate-y-1/2 left-16 right-5 bottom-12">
            <div className="flex justify-start ">
              <a
                href="#slide1"
                className=" text-white text-4xl hover:scale-125 hover:text-[#ffd24a] duration-300 mr-3"
              >
                <BsArrowLeftShort></BsArrowLeftShort>
              </a>
              <a
                href="#slide3"
                className="text-white text-4xl hover:scale-125 hover:text-[#ffd24a] duration-300"
              >
                <BsArrowRightShort></BsArrowRightShort>
              </a>
            </div>
            <img src={design2} alt="" />
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-[100vh] rounded" />
          <div className="absolute  h-full  w-full bg-gradient-to-r from-[#151515] to-[#00000033]">
            <div className=" w-full absolute top-0 font-philosopher">
              <Navber></Navber>
            </div>
            <div className="absolute top-40 left-8 lg:top-20 lg:left-80">
              <div className="flex flex-col items-center justify-center ml-12 lg:mb-10">
                <div className="h-2 w-20 outline-none bg-[#C99630] text-center mb-3">
                  {" "}
                </div>
                <h1 className="font-2xl font-semibold tracking-wider text-[#E5EBEF] font-philosopher">
                  Hellow, friend
                </h1>
              </div>
              <h1 className=" text-6xl font-semibold lg:text-9xl tracking-wider  text-[#E5EBEF] font-philosopher ml-8">
                Visit to our <br /> online shop
              </h1>
            </div>
          </div>
          <div className="absolute transform -translate-y-1/2 left-16 right-5 bottom-12">
            <div className="flex justify-start ">
              <a
                href="#slide2"
                className=" text-white text-4xl hover:scale-125 hover:text-[#ffd24a] duration-300 mr-3"
              >
                <BsArrowLeftShort></BsArrowLeftShort>
              </a>
              <a
                href="#slide1"
                className="text-white text-4xl hover:scale-125 hover:text-[#ffd24a] duration-300"
              >
                <BsArrowRightShort></BsArrowRightShort>
              </a>
            </div>
            <img src={design2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
