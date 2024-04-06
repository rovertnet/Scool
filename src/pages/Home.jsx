import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";

const Home = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
};

export default Home;
