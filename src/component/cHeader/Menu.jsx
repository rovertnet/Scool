import { Link, NavLink } from "react-router-dom";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

//les ongles de navigation
const navigation = [
  { name: "Home", to: "/" },
  { name: "Solutions", to: "/solution" },
  { name: "About", to: "/about" },
  { name: "faq", to: "/faq" },
  { name: "blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menu = () => {
  return (
    <>
      <div className="min-h-full md:mx-auto">
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
        <div className=" bg-green-600">
          <div className="flex justify-between items-center">
            {/* Les liens de nav */}
            <div className=" hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? " text-white text-xl font-bold border-white border-b-8"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "p-6 text-xl font-bold text-purple uppercase"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Le button de connexion */}
            <div className=" mr-10">
              <button className=" bg-black rounded-full px-4 py-4 text-xl text-slate-100">
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
