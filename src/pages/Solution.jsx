import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";
import SuperComp from "../component/cSlution/SuperComp";


const Solution = () => {
  return (
    <>
      <Outlet />
      <Menu />
      <SuperComp />
    </>
  );
}

export default Solution