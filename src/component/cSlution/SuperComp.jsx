import { Outlet } from "react-router-dom";
import SolutionBanner from "./SolutioBanner"
import CardSolution from "./CardSolution";
import ContactSolution from "./ContactSolution"

const SuperComp = () => {
  return (
    <>
      <SolutionBanner />
      <CardSolution />
      <ContactSolution />
      <Outlet />
    </>
  );
}

export default SuperComp