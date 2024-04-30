import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidEnvelopeOpen } from "react-icons/bi";

const ContactSolution = () => {
  return (
    <>
      <div className="mt-10 md:mt-10 md:mb-14 mb-12 px-10 md:px-12 md:py-10 py-10 block">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10">
          <div className="flex flex-col md:flex-col justify-start items-start gap-8 md:gap-8 bg-green-800 p-5 md:p-7">
            <LiaPhoneVolumeSolid className=" font-bold text-2xl md:text-2xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              APPEL d’URGENCE
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              (237) 681-812-255 <br /> (237) 666-331-894 A
            </p>
          </div>

          <div className="flex flex-col md:flex-col justify-start items-start gap-8 md:gap-8 bg-black p-5 md:p-7">
            <IoLocationOutline className=" font-bold text-2xl md:text-2xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              APPEL d’URGENCE
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              (237) 681-812-255 <br /> (237) 666-331-894
            </p>
          </div>

          <div className="flex flex-col md:flex-col justify-start items-start gap-8 md:gap-8 bg-red-600 p-5 md:p-7">
            <BiSolidEnvelopeOpen className=" font-bold text-2xl md:text-2xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              APPEL d’URGENCE
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              (237) 681-812-255 <br /> (237) 666-331-894
            </p>
          </div>

          <div className="flex flex-col md:flex-col justify-start items-start gap-8 md:gap-8 bg-green-800 p-5 md:p-7">
            <MdOutlineWatchLater className=" font-bold text-2xl md:text-2xl text-white" />
            <h2 className=" uppercase font-bold text-2xl md:text-2xl text-white">
              APPEL d’URGENCE
            </h2>
            <p className=" font-semibold text-slate-50 text-lg md:text-lg">
              (237) 681-812-255 <br /> (237) 666-331-894 A
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSolution;
