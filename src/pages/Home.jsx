import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import ComposantsMere from "../component/cHome/ComposantsMere";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Menu />

      <Outlet />
      <ComposantsMere />

      <Footer />
    </>
  );
};

export default Home;
