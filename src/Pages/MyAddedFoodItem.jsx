import { useContext, useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { AuthContext } from "../Provider/AuthProvider";
import MyFoodCard from "../Components/MyFoodCard";
import design2 from "../assets/images/design2.png";

const MyAddedFoodItem = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const url = `http://localhost:5000/userItem?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [url]);
  return (
    <div className="appContainer">
      <Navber></Navber>
      <div className="mt-10 mb-16">
        <h1 className="text-2xl text-center font-semibold lg:text-6xl tracking-wider  text-[#E5EBEF] font-philosopher ml-8">
          Your Contribution for <span className="text-[#ffd24a]">Testyc</span>
        </h1>
        <div className="flex justify-center items-center mt-5">
          <img src={design2} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 w-11/12 m-auto">
        {foods.map((food) => (
          <MyFoodCard key={food._id} food={food}></MyFoodCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoodItem;
