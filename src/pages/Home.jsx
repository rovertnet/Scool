import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import Banner from "../component/cAbout/Banner";
import About from "../component/cHome/About";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />

      <Banner />
      <About />
    </>
  );
};

export default Home;
