import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import Banner from "../component/cAbout/Banner";
import Newletter from "../component/cHome/Newletter";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />

      <Banner />
      <Newletter />
    </>
  );
};

export default Home;
