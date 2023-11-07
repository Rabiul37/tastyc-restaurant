import { Link, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import { useEffect, useState } from "react";
import design1 from "../assets/images/design1.png";
const FoodItemsDetails = () => {
  const [foodDetails, setFoodDetails] = useState([]);
  const { id } = useParams();
  const foodDetail = foodDetails.find((foodItem) => foodItem._id == id);
  useEffect(() => {
    fetch("http://localhost:5000/restaurantItem")
      .then((res) => res.json())
      .then((data) => setFoodDetails(data));
  }, []);
  const {
    _id,
    name,
    image,
    category,
    price,
    quantity,
    origin,
    made_by,
    description,
  } = foodDetail || {};
  return (
    <div className="appContainer p-3 pb-16 ">
      <Navber></Navber>
      <div className="">
        <div className="card w-10/12 m-auto border-4 border-gray-200 mt-28 lg:card-side bg-gray-300  shadow-xl">
          <figure>
            <img
              src={image}
              className="w-[500px] hover:scale-150 duration-500"
              alt="Album"
            />
          </figure>
          <div className="card-body font-philosopher font-semibold">
            <h1 className="text-4xl font-semibold tracking-wider">{name}</h1>
            <h1 className="text-xl ">Category : {category}</h1>
            <h1 className="text-xl ">Made by : {made_by}</h1>
            <h1 className="text-xl ">Food Origin {origin}</h1>
            <div className="flex gap-5">
              <h1 className="  w-40 bg-[#d4300f] py-3 radius text-center text-xl font-semibold text-gray-200 ">
                {" "}
                Quantity : {quantity}
              </h1>
              <h1 className=" w-40 bg-[#d4300f] py-3 radius2 text-center text-xl font-semibold text-gray-200 ">
                {" "}
                Price : {price} $
              </h1>
            </div>
            <p className="font-md">{description}</p>
            <div className="flex gap-8">
              <Link to={`/order/${_id}`}>
                <button className="w-64 rounded-xl py-2 text-xl font-semibold tracking-wider border-2 border-[#d4300f] hover:bg-[#d4300f] hover:text-gray-200 duration-300 ">
                  Order
                </button>
              </Link>
              <img src={design1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemsDetails;
