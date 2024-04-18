import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiWalletAlt } from "react-icons/bi";



const Banner = () => {
  return (
    <>
      <div>
        <div className=" bg-center bg-no-repeat bg-[url('../../public/fond.jpg')] bg-gray-700 bg-blend-multiply mt-10 py-20 px-10 md:mt-52 md:px-10 md:py-20">
          <div className=" flex flex-col justify-center items-center gap-10 py-7 md:py-5">
            <div className="text-center">
              <span className=" md:py-4 py-3 font-medium text-md text-green-500 md:text-center text-center">
                M U S D E E L
              </span>
              <p className=" md:py-4 py-3 font-extrabold text-4xl md:text-center text-center text-slate-300">
                Retrouvons la santé <br /> ensemble
              </p>
              <div className="md:pt-3 pt-4">
                <button className=" bg-green-700 rounded-full md:px-9 px-24 md:py-3 py-3 md:text-xl text-base font-bold text-white">
                  Adherer maintenant
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:-inset-10 md:-my-14 -my-10 mx-10">
          <div className="flex justify-center items-center gap- md:gap-16 ">
            <div className="bg-slate-200 md:px-14 px-7 md:py-7 shadow-md py-5 rounded-lg flex flex-col-reverse md:flex-row gap-4 md:gap-8">
              <span className="text-lg m flex-col-reverse font-bold">Sophistiquée</span>
              <FaCalendarAlt className="text-2xl md:text-5xl " />
            </div>
            <div className="bg-green-700 md:px-14 px-7 md:py-7 shadow-md py-5 rounded-lg flex flex-col-reverse md:flex-row gap-4 md:gap-8">
              <span className=" text-white text-lg m flex-col-reverse font-bold">Sérieuse</span>
              <FaUsers className="text-2xl md:text-5xl text-white" />
            </div>
            <div className="bg-black md:px-14 px-7 md:py-7 shadow-md py-5 rounded-lg flex flex-col-reverse md:flex-row gap-4 md:gap-8">
              <span className=" text-white text-lg m flex-col-reverse font-bold">Rassurante</span>
              <BiWalletAlt className="text-2xl md:text-5xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
