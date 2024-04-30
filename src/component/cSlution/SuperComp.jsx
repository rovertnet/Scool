import { Outlet } from "react-router-dom";
import SolutionBanner from "./SolutioBanner"
import CardSolution from "./CardSolution";
import ContactSolution from "./ContactSolution";
import Footer from "../Footer"

const SuperComp = () => {
  return (
    <>
      <SolutionBanner />

      <div className=" container md:mx-5">
        <CardSolution />
        <ContactSolution />
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default SuperComp