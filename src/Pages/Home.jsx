import Application from "../Components/Application";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import TopFood from "../Components/TopFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopFood></TopFood>
      <Team></Team>
      <Application></Application>
      <Footer></Footer>
    </div>
  );
};

export default Home;
