import { useContext } from "react";
import Navber from "../Components/Navber";
import { AuthContext } from "../Provider/AuthProvider";
import "../AllCss/Login.css";
import axios from "axios";
import Swal from "sweetalert2";
const AddFoodItem = () => {
  const { user } = useContext(AuthContext);
  const handleAdditem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.imgURL.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const origin = form.origin.value;
    const made_by = form.madebyName.value;
    const description = form.description.value;
    const email = user?.email;
    const addItem = {
      name,
      image,
      category,
      price,
      quantity,
      origin,
      made_by,
      description,
      email,
    };
    console.log(addItem);
    axios.post("http://localhost:5000/userItem", addItem).then((res) => {
      if (res.data.insertedId) {
        Swal.fire(
          "Your Food item is added",
          "Thanks for stay with us !",
          "success"
        );
      }
    });
  };
  return (
    <div className="logcontainer">
      <Navber></Navber>
      <div>
        <div className="font-philosopher">
          <h1 className="text-2xl text-center font-semibold lg:text-4xl tracking-wider  text-[#E5EBEF] font-philosopher ml-8">
            You can add food items here
          </h1>
          <p className="text-xl font-semibold text-gray-100 text-center">
            Add a food item and be with us.
          </p>
        </div>
        <div className="-mt-10">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
              <div className="card flex-shrink-0 w-full  shadow-2xl  appContainer font-philosopher">
                <form onSubmit={handleAdditem} className="card-body">
                  <div className=" lg:flex items-center gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">Food Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Food Name"
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">
                          Food image
                        </span>
                      </label>
                      <input
                        type="text"
                        name="imgURL"
                        placeholder="Food image Link"
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                  </div>
                  <div className=" lg:flex items-center gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">
                          Food category
                        </span>
                      </label>
                      <input
                        type="text"
                        name="category"
                        placeholder="Food category"
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">Price</span>
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                  </div>
                  <div className=" lg:flex items-center gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">Quantity</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        placeholder="Number"
                        min={1}
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">Made By</span>
                      </label>
                      <input
                        type="text"
                        name="madebyName"
                        defaultValue={user?.displayName}
                        className="input input-bordered bg-gray-100"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className=" lg:flex items-center gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">
                          Food Origin
                        </span>
                      </label>
                      <input
                        type="text"
                        name="origin"
                        placeholder="Food Origin"
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="text-gray-100 text-xl">
                          About Food
                        </span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Food description"
                        className="input input-bordered bg-gray-100"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button className="rounded-xl text-white py-2 text-xl font-semibold tracking-wider border-2 border-gray-100 hover:bg-[#d4300f] hover:text-gray-200 duration-300 ">
                      Add Item
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItem;
