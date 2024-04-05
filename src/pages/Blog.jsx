import { Outlet } from "react-router-dom"
import Menu from "../component/cHeader/Menu";


const Blog = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}

export default Blog