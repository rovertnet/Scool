import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />

      
    </>
  );
};

export default Home;
