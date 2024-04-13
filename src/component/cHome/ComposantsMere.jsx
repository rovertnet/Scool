import { MdOutlet } from "react-icons/md";
import Banner from "../cAbout/Banner";
import About from "./About";
import Contact from "./Contact";
import Person from "./Person";
import Question from "./Question";
import Partenaire from "./Partenaire";

const ComposantsMere = () => {
  return (
    <>
      <Banner />
      <About />
      <Person />
      <Question />
      <Contact />
      <Partenaire />

      <MdOutlet />
    </>
  );
}

export default ComposantsMere