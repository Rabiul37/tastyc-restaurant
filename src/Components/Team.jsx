import team from "../assets/images/team.jpg";
import design2 from "../assets/images/design2.png";
const Team = () => {
  return (
    <>
      <div className="flex gap-10 justify-between mt-20 mb-20 bg-gray-100 p-10">
        <div className="mt-10">
          <img src={design2} alt="" className="" />
          <span className="text-xl font-semibold font-opensens">Team</span>
          <h1 className="text-6xl font-semibold font-philosopher text-[#FF3811] mb-5">
            Use the Tips & <br /> Recipes of Our Chefs
          </h1>
          <p className="text-1xl font-opensens text-gray-600 font-semibold text-justify">
            Our restaurants chef is a culinary virtuoso, renowned for crafting
            exquisite dishes with precision and passion. Their commitment to
            quality elevates every dining experience, leaving guests delighted
            and satisfied
          </p>
          <button className="btn w-56  bg-[#FF3811] text-gray-100 mt-20 hover:text-gray-800 hover:text-[#FF3811] font-philosopher text-xl">
            MEET THE TEAM
          </button>
        </div>
        <div>
          <img src={team} className="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Team;
