import { MdOutlet } from "react-icons/md";
import Banner from "../cAbout/Banner";
import About from "./About";
import Contact from "./Contact";
import Person from "./Person";
import Question from "./Question";
import Partenaire from "./Partenaire";
import NewsLetter from "./NewsLetter";

const ComposantsMere = () => {
  return (
    <>
      <Banner />
      <About />
      <Person />
      <Question />
      <Contact />
      <Partenaire />
      <NewsLetter />

      <MdOutlet />
    </>
  );
}

export default ComposantsMere