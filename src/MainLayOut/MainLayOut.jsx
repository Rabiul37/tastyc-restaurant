import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="w-full">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
