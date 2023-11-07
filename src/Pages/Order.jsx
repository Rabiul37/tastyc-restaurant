import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import PageTitle from "../Components/PageTitle";
const Order = () => {
  const { user } = useContext(AuthContext);
  const [foodDetails, setFoodDetails] = useState([]);

  const { id } = useParams();
  const foodDetail = foodDetails.find((foodItem) => foodItem._id == id);
  useEffect(() => {
    fetch("http://localhost:5000/restaurantItem")
      .then((res) => res.json())
      .then((data) => setFoodDetails(data));
  }, []);
  const { name, price, quantity } = foodDetail || {};
  const handleOrderForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const date = form.date.value;
    const order = { name, price, quantity, buyerName, buyerEmail, date };
    axios.post("http://localhost:5000/order", order).then((res) => {
      if (res.data.insertedId) {
        Swal.fire(
          "Your order is confirmed",
          "You will get your food soon !",
          "success"
        );
      }
    });
  };
  return (
    <>
      <div className="regcontainer">
        <PageTitle title="Tastyc-Order"></PageTitle>
        <Navber></Navber>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-[#000000b9] font-philosopher">
              <form onSubmit={handleOrderForm} className="card-body">
                <div className="text-center ">
                  <h1 className="text-xl text-gray-100 font-bold">
                    Confirm your order
                  </h1>
                </div>
                <div className=" lg:flex items-center gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-gray-100">Food Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="food Name"
                      defaultValue={name}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-gray-100">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="food price"
                      defaultValue={price}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                </div>
                <div className=" lg:flex items-center gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-gray-100">Quantity</span>
                    </label>
                    <input
                      id="digit"
                      type="number"
                      name="quantity"
                      placeholder="quality"
                      defaultValue={quantity}
                      max={quantity}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-gray-100">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      placeholder="Your Name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                </div>
                <div className=" lg:flex items-center gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-gray-100">Your E-mail</span>
                    </label>
                    <input
                      type="text"
                      name="buyerEmail"
                      placeholder="Your Email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-gray-100">Date</span>
                    </label>
                    <input
                      type="datetime-local"
                      name="date"
                      placeholder="date"
                      className="input input-bordered w-[210px]"
                      required
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="rounded-xl text-white py-2 text-xl font-semibold tracking-wider border-2 border-[#d4300f] hover:bg-[#d4300f] hover:text-gray-200 duration-300 ">
                    Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
