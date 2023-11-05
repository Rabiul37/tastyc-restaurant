import { Link, NavLink } from "react-router-dom";
import design2 from "../assets/images/design2.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
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
          to="/service"
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
          <h1>{user?.email}</h1>
          <Link to="/signin">
            <button
              onClick={handleLogout}
              className="border-2 border-gray-100  px-6 py-1 text-gray-100 font-opensens text-xl font-semibold hover:bg-[#e8be6a] hover:text-white hover:border-none rounded-md "
            >
              {user ? "Log out" : "Signin"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
