import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import Banner from "../component/cAbout/Banner";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />

      <Banner />
    </>
  );
};

export default Home;
