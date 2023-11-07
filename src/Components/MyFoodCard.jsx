import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MyFoodCard = ({ food }) => {
  const { _id, name, image, category, price, quantity } = food;
  return (
    <div>
      <div className="card w-80 h-[450px] bg-gray-200  font-philosopher hover:shadow-white shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="foodItem"
            className="rounded-xl hover:scale-125 duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <h2 className="card-title">Category : {category}</h2>
          <h2 className="card-title">Quantity : {quantity}</h2>
          <h2 className=" bg-[#d4300f] py-3 radius text-center text-xl font-semibold text-gray-200 ">
            Price : {price} ${" "}
          </h2>

          <div className="card-actions">
            <Link to={`/foodItemDetails/${_id}`}>
              <button className="w-64 rounded-xl py-2 text-xl font-semibold tracking-wider border-2 border-[#d4300f] hover:bg-[#d4300f] hover:text-gray-200 duration-300 ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodCard;
MyFoodCard.propTypes = {
  food: PropTypes.object,
};
