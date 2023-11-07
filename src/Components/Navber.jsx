import { Link, NavLink } from "react-router-dom";
import design2 from "../assets/images/design2.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.massage);
      });
  };
  const navber = (
    <>
      <li className="hover:underline  hover:decoration-[#e8be6a] decoration-4 underline-offset-1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#e8be6a] decoration-4 underline-offset-1 text-[#e8be6a] "
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="hover:underline  hover:decoration-[#e8be6a] decoration-4 underline-offset-1">
        <NavLink
          to="/allfood"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#e8be6a] decoration-4 underline-offset-1 text-[#e8be6a]  "
              : isPending
              ? "pending"
              : ""
          }
        >
          All Food Items
        </NavLink>
      </li>
      <li className="hover:underline  hover:decoration-[#e8be6a] decoration-4 underline-offset-1">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#e8be6a] decoration-4 underline-offset-1 text-[#e8be6a]  "
              : isPending
              ? "pending"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-gray-100 mr-5 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navber}
            </ul>
          </div>
          <Link to="/">
            <div>
              <h1 className="text-3xl font-semibold text-gray-100 font-philosopher">
                Tastyc
              </h1>
              <img src={design2} className="w-20" alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 text-white font-philosopher text-2xl   menu-horizontal px-1">
            {navber}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow text-xl border-b-2  dropdown-content bg-black border-2 text-gray-100 rounded-box w-60"
                >
                  <li>
                    <Link to="/myAddedItem">
                      <a className="hover:border-b-2">My added food item</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddItem">
                      <a className="hover:border-b-2">add a food item</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myOrderedItem">
                      <a className="hover:border-b-2">My ordered food item</a>
                    </Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <a className="hover:border-b-2">Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link to="/Login">
                  <button className=" bg-[#e8be6a3b] mb-5 w-44 px-6 py-1 text-gray-100 font-opensens text-xl font-semibold hover:border-2 border-[#FDCE6F] hover:text-gray-100  rounded-md ">
                    Log in
                  </button>
                </Link>
                <Link to="/Register">
                  <button className=" bg-[#e8be6a3b] w-44 px-6 py-1 text-gray-100 font-opensens ml-2 text-xl font-semibold hover:border-2 border-[#FDCE6F] hover:text-gray-100  rounded-md ">
                    Registration
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
