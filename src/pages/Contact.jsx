import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";


const Contact = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}

export default Contact