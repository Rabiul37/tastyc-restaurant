import { useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import AllFoodCard from "../Components/AllFoodCard";
import design2 from "../assets/images/design2.png";

const Allfood = () => {
  const restaurantItem = useLoaderData();

  return (
    <div className="appContainer">
      <Navber></Navber>
      <div className="mt-10 mb-16">
        <h1 className="text-2xl text-center font-semibold lg:text-6xl tracking-wider  text-[#E5EBEF] font-philosopher ml-8">
          Exquisite Dining Experience at{" "}
          <span className="text-[#ffd24a]">Tastyc</span>{" "}
        </h1>
        <p className="text-1xl mt-4 font-semibold font-opensens text-gray-100 text-center">
          Indulge in the culinary artistry of our kitchen, where every dish is a
          masterpiece crafted with passion and expertise. <br /> At Tastyc , our
          food menu is a gastronomic journey that takes you on a delectable{" "}
          <br /> adventure through a world of flavors.
        </p>
        <div className="flex justify-center items-center mt-5">
          <img src={design2} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 w-11/12 m-auto">
        {restaurantItem.map((foodItem) => (
          <AllFoodCard key={foodItem._id} foodItem={foodItem}></AllFoodCard>
        ))}
      </div>
    </div>
  );
};

export default Allfood;
