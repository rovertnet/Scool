import { Outlet } from "react-router-dom"
import Navbar from "../component/cHeader/Navbar";


const Home = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default Home