import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import design2 from "../assets/images/design2.png";
import "../AllCss/Login.css";
import { Link } from "react-router-dom";
const TopFood = () => {
  const [topFoods, setTopFoods] = useState([]);
  useEffect(() => {
    fetch("https://tastyc-restaurant-server.vercel.app/restaurantItem")
      .then((res) => res.json())
      .then((data) => setTopFoods(data));
  }, []);
  return (
    <>
      <div className="mt-16 w-11/12 m-auto  font-philosopher regcontainer radius3 p-10 ">
        <div className="mb-8 text-center text-gray-100">
          <h2 className="text-3xl font-semibold">Chefs Specials</h2>
          <div className="flex justify-center items-center mb-2 mt-2">
            <div className="h-[5px] bg-[#C5932F] outline-0 w-40 rounded-xl" />
          </div>
          <h1 className="text-xl  font-semibold lg:text-6xl">
            Our Top Selling and Most Popular Dishes
          </h1>
          <p className="text-xl font-semibold">
            Discover the culinary delights that have won the hearts of our loyal
            customers! At tastyc , we take pride in presenting our Chefs
            Specials, a collection of our top-selling and most beloved dishes
          </p>
          <div className="flex justify-center items-center mt-5">
            <img src={design2} alt="" />
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-5 ">
            {topFoods.slice(0, 6).map((topFood) => (
              <TopFoodCard key={topFood._id} topFood={topFood}></TopFoodCard>
            ))}
          </div>
        </div>
        <Link to="/allfood">
          <div className="flex justify-center items-center mt-5">
            <button className="w-48  bg-transparent border-2  py-3 radius text-center text-xl font-semibold text-gray-200 hover:bg-[#d4300f] hover:border-none duration-300">
              See More food
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TopFood;
