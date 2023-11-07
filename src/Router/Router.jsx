import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Allfood from "../Pages/Allfood";
import Blog from "../Pages/Blog";
import FoodItemsDetails from "../Pages/FoodItemsDetails";
import Order from "../Pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allfood",
        element: <Allfood></Allfood>,
        loader: () => fetch("http://localhost:5000/restaurantItem"),
      },
      {
        path: "/foodItemDetails/:id",
        element: <FoodItemsDetails></FoodItemsDetails>,
      },
      {
        path: "/order/:id",
        element: <Order></Order>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
