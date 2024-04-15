import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <>
      <div className="max-w-screexl">
        <div className="bg-slate-950 md:px-10 px-10 md:py-8 py-8">
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
                <FaSquareXTwitter className="font-bold text-2xl md:text-3xl text-white" />
                <BsFacebook className="font-bold text-2xl md:text-3xl text-blue-700" />
                <FaSquareInstagram className="font-bold text-2xl md:text-3xl text-red-800" />
                <FaLinkedin className="font-bold text-2xl md:text-3xl text-blue-600" />
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-12 items-start md:mt-2">
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
                <div className=" md:text-base text-lg text-slate-100 flex gap-3">
                  <MdOutlineWatchLater className=" font-bold text-2xl md:text-2xl text-slate-50" />
                  contact@musdeel.com
                </div>
                <div className=" flex gap-3 md:text-base text-lg text-slate-100">
                  <LiaPhoneVolumeSolid className=" font-bold text-2xl md:text-2xl text-slate-50" />
                  +243 000 000 000
                </div>
                <div className=" flex gap-3 md:text-base text-lg text-slate-100">
                  <IoLocationOutline className=" font-bold text-2xl md:text-2xl text-slate-50" />
                  593, Dalhias , 10ème rue Résidentiel <br /> | Limete Signaler
                  un problème
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-slate-900 px-10 md:px-10 md:py-5 py-5">
          <p className=" text-xs md:text-sm text-slate-200 font-normal">
            © MUSDEEL {new Date().getFullYear()}. tous droits réservés
          </p>

          <p className=" text-xs md:text-sm text-slate-200 font-normal">
            Bestech Consult
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
