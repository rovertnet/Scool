import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Menu = () => {
  return (
    <>
      <div className="min-h-full">
        {/* Top Bar begin */}
        <div className=" bg-slate-50">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <img src="../../public/vite.svg" alt="logo" className="" />
            </Link>
            {/* */}
            <div className="flex justify-center items-center">
              <div className="flex gap-5">
                <FaPhoneVolume className=" font-extrabold text-3xl text-green-600" />
                <div>
                  <h3 className=" text-black text-2xl font-bold">Appel</h3>
                  <p className=" text-green-600 text-xl font-semibold">
                    (243) 998724266{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <MdOutlineWatchLater />
                <div>
                  <h3 className=" text-black text-2xl font-bold">Horaire</h3>
                  <p className=" text-green-600 text-xl font-semibold">
                    (243) 998724266{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <IoLocationOutline />
                <div>
                  <h3 className=" text-black text-2xl font-bold">Location</h3>
                  <p className=" text-green-600 text-xl font-semibold">
                    (243) 998724266{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
