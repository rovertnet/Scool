import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import ComposantsMere from "../component/cHome/ComposantsMere";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />
      <ComposantsMere />
    </>
  );
};

export default Home;
