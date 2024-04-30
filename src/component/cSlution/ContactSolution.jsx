import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidEnvelopeOpen } from "react-icons/bi";

const ContactSolution = () => {
  return (
    <>
      <div className=" md:mb-14 mb-12 px-10 md:px-12 md:py-10 py-7 block">
        <div className="flex md:flex-col flex-col gap-2 md:gap-2 md:py-10 py-10 justify-center items-center">
          <h3 className=" font-medium text-lg md:text-lg text-green-700">
            Entrer en contact
          </h3>
          <h2 className=" font-extrabold text-2xl md:text-2xl text-black uppercase">
            Contact
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10">
          {/* Nos card */}
          <div className="flex flex-col md:flex-col justify-start items-start gap-3 md:gap-3 rounded-lg bg-green-700 p-5 md:p-7">
            <LiaPhoneVolumeSolid className=" font-bold text-2xl md:text-4xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              APPEL d’URGENCE
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              (237) 681-812-255 <br /> (237) 666-331-894 A
            </p>
          </div>

          <div className="flex flex-col md:flex-col justify-start items-start gap-3 md:gap-3 rounded-lg bg-black p-5 md:p-7">
            <IoLocationOutline className=" font-bold text-2xl md:text-4xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              NOS BUREAUX
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              0123 Some place <br /> 9876 Some country
            </p>
          </div>

          <div className="flex flex-col md:flex-col justify-start items-start gap-3 md:gap-3 rounded-lg bg-red-600 p-5 md:p-7">
            <BiSolidEnvelopeOpen className=" font-bold text-2xl md:text-4xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              ADRESSE EMAIL
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              ildineeesoe@gmil.com <br /> myebstudios@gmail.com
            </p>
          </div>

          <div className="flex flex-col md:flex-col justify-start items-start gap-3 md:gap-3 rounded-lg bg-green-700 p-5 md:p-7">
            <MdOutlineWatchLater className=" font-bold text-2xl md:text-4xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              HORAIRE DE TRAVAIL
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              Mon Sat 09:00-20:00 <br /> Sunday Emergency only
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSolution;