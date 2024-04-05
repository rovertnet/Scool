import { Outlet } from "react-router-dom";
import Menu from "../component/cHeader/Menu";


const Solution = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}

export default Solution