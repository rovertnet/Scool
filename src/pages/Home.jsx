import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import Banner from "../component/cAbout/Banner";
import About from "../component/cHome/About";
import Person from "../component/cHome/Person";
import Question from "../component/cHome/Question";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />

      <Banner />
      <About />
      <Person />


      <Question />
    </>
  );
};

export default Home;
