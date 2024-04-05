import { Outlet } from "react-router-dom"
import Menu from "../component/cHeader/Menu";


const About = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}

export default About