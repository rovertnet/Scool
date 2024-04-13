import { MdOutlet } from "react-icons/md";
import Banner from "../cAbout/Banner";
import About from "./About";
import Contact from "./Contact";
import Partenaire from "./Partenaire";
import Person from "./Person";
import Question from "./Question";

const ComposantsMere = () => {
  return (
    <>
      <MdOutlet />
      <Banner />
      <About />
      <Person />
      <Question />
      <Contact />
      <Partenaire />
    </>
  );
}

export default ComposantsMere