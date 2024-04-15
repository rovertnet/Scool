import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-slate-900 md:px-10 px-10 md:py-8 py-8">
          <h1 className="text-start font-bold text-xl md:text-2xl text-white leading-normal">
            LA MUSDEEL
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-slate-100 font-medium md:text-base text-lg py-4 md:py-5">
                Nous sommes un système qui permet à nos adhérents, contre
                paiement d’une cotisation, de se faire rembourser des frais de
                santé qui ne sont pas pris en charge par la Sécurité sociale
              </p>
              <div className="flex space-x-3 md:space-x-3">
                <FaSquareXTwitter className="font-bold text-xl md:text-xl text-black" />
                <BsFacebook className="font-bold text-xl md:text-xl text-blue-700" />
                <FaSquareInstagram className="font-bold text-xl md:text-xl text-red-800" />
                <FaLinkedin className="font-bold text-xl md:text-xl text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Link to={"/"}>Accueil</Link>
              <Link to={"/solution"}>Solution</Link>
              <Link to={"/about"}>A propos</Link>
              <Link to={"/faq"}>FAQ</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link to={"/"}>Centre d'appel</Link>
              <Link to={"/"}>Adhésion</Link>
              <Link to={"/"}>Signaler un problème</Link>
              <Link to={"/"}>Chat support</Link>
            </div>
            <div className="flex flex-col gap-5">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
