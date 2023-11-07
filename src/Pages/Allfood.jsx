import Navber from "../Components/Navber";
import AllFoodCard from "../Components/AllFoodCard";
import design2 from "../assets/images/design2.png";
import "../AllCss/Login.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Allfood = () => {
  const [restaurantItems, setrestaurantItem] = useState([]);
  const [itemsperPage, setItemsperPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  console.log(count);
  const numberOfPage = Math.ceil(count / itemsperPage);
  const pages = [...Array(numberOfPage).keys()];

  const handleperpage = (e) => {
    const page = parseInt(e.target.value);
    setItemsperPage(page);
    setCurrentPage(0);
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/restaurantItem?page=${currentPage}&size=${itemsperPage}`
    )
      .then((res) => res.json())
      .then((data) => setrestaurantItem(data));
  }, [currentPage, itemsperPage]);
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
        {restaurantItems.map((foodItem) => (
          <AllFoodCard key={foodItem._id} foodItem={foodItem}></AllFoodCard>
        ))}
      </div>

      <div className="pagination text-center ">
        <button onClick={handlePrev} className="mr-2">
          prev
        </button>
        {pages.map((page) => (
          <button
            className={currentPage === page && "currentPage"}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="mr-5 ">
          Next
        </button>
        <select value={itemsperPage} onChange={handleperpage} name="" id="">
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>
    </div>
  );
};

export default Allfood;
