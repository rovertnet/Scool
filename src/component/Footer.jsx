import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LiaPhoneVolumeSolid } from "react-icons/lia";


const Footer = () => {
  return (
    <>
      <div className="max-w-screexl">
        <div className="bg-slate-900 md:px-10 px-10 md:py-8 py-8">
          <h1 className="text-start font-bold text-xl md:text-2xl text-white leading-normal">
            LA MUSDEEL
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex flex-col gap-5">
              <p className="text-slate-100 font-medium md:text-base text-justify max-w-md text-lg py-4 md:py-5">
                Nous sommes un système qui permet à nos adhérents, contre
                paiement d’une cotisation, de se faire rembourser des frais de
                santé qui ne sont pas pris en charge par la Sécurité sociale
              </p>
              <div className="flex space-x-3 md:space-x-3">
                <FaSquareXTwitter className="font-bold text-xl md:text-3xl text-white" />
                <BsFacebook className="font-bold text-xl md:text-3xl text-blue-700" />
                <FaSquareInstagram className="font-bold text-xl md:text-3xl text-red-800" />
                <FaLinkedin className="font-bold text-xl md:text-3xl text-blue-600" />
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start md:mt-2">
              <div className="flex flex-col gap-2">
                <Link className=" md:text-base text-lg text-slate-100" to={"/"}>
                  Accueil
                </Link>
                <Link
                  className=" md:text-base text-lg text-slate-100"
                  to={"/solution"}
                >
                  Solution
                </Link>
                <Link
                  className=" md:text-base text-lg text-slate-100"
                  to={"/about"}
                >
                  A propos
                </Link>
                <Link
                  className=" md:text-base text-lg text-slate-100"
                  to={"/faq"}
                >
                  FAQ
                </Link>
                <Link
                  className=" md:text-base text-lg text-slate-100"
                  to={"/blog"}
                >
                  Blog
                </Link>
                <Link
                  className=" md:text-base text-lg text-slate-100"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <Link className=" md:text-base text-lg text-slate-100" to={"/"}>
                  Centre d'appel
                </Link>
                <Link className=" md:text-base text-lg text-slate-100" to={"/"}>
                  Adhésion
                </Link>
                <Link className=" md:text-base text-lg text-slate-100" to={"/"}>
                  Signaler un problème
                </Link>
                <Link className=" md:text-base text-lg text-slate-100" to={"/"}>
                  Chat support
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <div className=" md:text-base text-lg text-slate-100 flex space-x-2">

                  contact@musdeel.com
                </div>
                <div className=" md:text-base text-lg text-slate-100">
                  Adhésion
                </div>
                <div className=" md:text-base text-lg text-slate-100">
                  Signaler un problème
                </div>
                <div className=" md:text-base text-lg text-slate-100">
                  Chat support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
