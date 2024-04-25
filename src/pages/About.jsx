import { Outlet } from "react-router-dom"
import Menu from "../component/cHeader/Menu";
import Tout from "../component/cAbout/Tout";


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