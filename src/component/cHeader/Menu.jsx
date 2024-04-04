import { Link } from "react-router-dom";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Menu = () => {
  return (
    <>
      <div className="min-h-full ">
        {/* Top Bar begin */}
        <div className=" bg-slate-50 md:px-10 px-12 md:p-6 p-5">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <img
                src="../../public/vite.svg"
                alt="logo"
                className=" h-14 w-14"
              />
            </Link>
            {/* */}
            <div className="flex justify-center items-center gap-5">
              <div className="flex gap-2">
                <LiaPhoneVolumeSolid className=" font-extrabold text-6xl text-green-600" />
                <div>
                  <h3 className=" text-black text-2xl font-bold">Appel</h3>
                  <p className=" text-green-600 text-xl font-semibold">
                    (243) 998724266{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MdOutlineWatchLater className=" font-extrabold text-6xl text-green-600" />
                <div>
                  <h3 className=" text-black text-2xl font-bold">Horaire</h3>
                  <p className=" text-green-600 text-xl font-semibold">
                    (243) 998724266{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <IoLocationOutline className=" font-extrabold text-6xl text-green-600" />
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

        {/* Les ongles du menu */}
        <div className=""></div>

      </div>
    </>
  );
};

export default Menu;
