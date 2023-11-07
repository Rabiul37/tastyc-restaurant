import Application from "../Components/Application";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import PageTitle from "../Components/PageTitle";
import Team from "../Components/Team";
import TopFood from "../Components/TopFood";

const Home = () => {
  return (
    <div>
      <PageTitle title="Tastyc-Home"></PageTitle>
      <Banner></Banner>
      <TopFood></TopFood>
      <Team></Team>
      <Application></Application>
      <Footer></Footer>
    </div>
  );
};

export default Home;
