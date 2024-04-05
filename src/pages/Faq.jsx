import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";


const Faq = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}

export default Faq