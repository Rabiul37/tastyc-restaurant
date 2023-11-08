import { useContext, useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { AuthContext } from "../Provider/AuthProvider";
import MyOrderedCard from "../Components/MyOrderedCard";
import axios from "axios";
import Swal from "sweetalert2";
import PageTitle from "../Components/PageTitle";

const MyOrderedFoodItem = () => {
  //all ordered data collection operation code .
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const url = `https://tastyc-restaurant-server.vercel.app/order?buyerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url, { withcredentials: true })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  //single order delete operation code .
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      axios
        .delete(`https://tastyc-restaurant-server.vercel.app/order/${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    });
  };
  return (
    <div className="logcontainer">
      <PageTitle title="Tastyc-My order"></PageTitle>
      <Navber></Navber>
      <div className="p-40 pt-10 pb-[370px]">
        <div className="overflow-x-auto  text-gray-100">
          <table className="table">
            {/* head */}
            <thead className="text-gray-100 font-philosopher text-xl bg-[#e24d2f] ">
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
                <MyOrderedCard
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                ></MyOrderedCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrderedFoodItem;
