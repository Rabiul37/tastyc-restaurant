import { useContext, useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { AuthContext } from "../Provider/AuthProvider";
import MyOrderedCard from "../Components/MyOrderedCard";

const MyOrderedFoodItem = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const url = `http://localhost:5000/order?email=${user?.email}`;
  useEffect(() => {
    fetch(url, { withcredentials: true })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);
  return (
    <div className="logcontainer">
      <Navber></Navber>
      <div className="p-40">
        <div className="overflow-x-auto  text-gray-100">
          <table className="table">
            {/* head */}
            <thead className="text-gray-100 font-philosopher text-xl bg-[#ff3811] ">
              <tr>
                <th></th>
                <th>Food Name </th>
                <th>Buyer Name </th>
                <th>Buyer E-Mail</th>
                <th>Quantity </th>
                <th>Price</th>
                <th>Total price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <MyOrderedCard key={order._id} order={order}></MyOrderedCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrderedFoodItem;
