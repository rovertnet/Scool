import { Outlet } from "react-router-dom";
import SolutionBanner from "./SolutioBanner"
import CardSolution from "./CardSolution";

const SuperComp = () => {
  return (
    <>
      <SolutionBanner />
      <CardSolution />
      <Outlet />
    </>
  );
}

export default SuperComp