import { Link } from "react-router-dom";
import error from "../assets/error.jpg";
import PageTitle from "../Components/PageTitle";
const ErrorPage = () => {
  return (
    <div className="flex flex-col">
      <PageTitle title="Tastyc-Error"></PageTitle>
      <img className="w-8/12 m-auto h-[90vh]" src={error} alt="" />
      <button className=" px-5 py-2 m-auto bg-[#FD1A5A] font-semibold text-white">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
