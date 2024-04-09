import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import Banner from "../component/cAbout/Banner";
import About from "../component/cHome/About";
import Person from "../component/cHome/Person";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />

      <Banner />
      <About />
      <Person />
    </>
  );
};

export default Home;
