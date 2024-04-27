import { MdOutlet } from "react-icons/md";
import Banner from "../cAbout/Banner";
import About from "./About";
import Contact from "./Contact";
import Question from "./Question";
import Partenaire from "./Partenaire";
import NewsLetter from "./NewsLetter";
import Element from "./Element";

const ComposantsMere = () => {
  return (
    <>
      <Banner />
      <div className=" md:container">
        <About />
        <Element />
        <Question />
        <Contact />
        <Partenaire />
        <NewsLetter />
      </div>
      <MdOutlet />
    </>
  );
}

export default ComposantsMere