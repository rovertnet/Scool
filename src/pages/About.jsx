import { Outlet } from "react-router-dom"
import Menu from "../component/cHeader/Menu";
import Tout from "../component/cAbout/Tout";
import Footer from "../component/Footer";


const About = () => {
  return (
    <>
      <Outlet />
      <Menu />
      <Tout />
      <Footer />
    </>
  );
}

export default About