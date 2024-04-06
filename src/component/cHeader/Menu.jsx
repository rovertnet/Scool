import { Link, NavLink } from "react-router-dom";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Disclosure } from "@headlessui/react";

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
      <div className="min-h-full">
        <Disclosure
          as={"nav"}
          className={" fixed top-0 left-0 right-0 shadow-lg"}
        >
          {({ open }) => (
            <>
              <div className="min-h-full md:mx-auto bg-slate-50">
                {/* Top Bar begin */}
                <div className="  md:px-10 px-9 md:p-6 p-3">
                  <div className="flex justify-between items-center">
                    <Link to={"/"}>
                      <img
                        src="../../public/scool_logo.png"
                        alt="logo"
                        className=" h-9 w-24 md:h-20 md:w-36"
                      />
                    </Link>
                    {/* */}
                    <div className=" hidden md:block">
                      <div className="flex justify-center items-center gap-5">
                        <div className="flex gap-2">
                          <LiaPhoneVolumeSolid className=" font-extrabold text-6xl text-green-600" />
                          <div>
                            <h3 className=" text-black text-2xl font-bold">
                              Appel
                            </h3>
                            <p className=" text-green-600 text-xl font-semibold">
                              (243) 998724266{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <MdOutlineWatchLater className=" font-extrabold text-6xl text-green-600" />
                          <div>
                            <h3 className=" text-black text-2xl font-bold">
                              Horaire
                            </h3>
                            <p className=" text-green-600 text-xl font-semibold">
                              09:00 - 20:00 Everyday{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <IoLocationOutline className=" font-extrabold text-6xl text-green-600" />
                          <div>
                            <h3 className=" text-black text-2xl font-bold">
                              Location
                            </h3>
                            <p className=" text-green-600 text-xl font-semibold">
                              0123 Some Place{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden p-3">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-purple p-2 text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ring-offset-2 focus:ring-offset-green-700 ring-offset-green-700">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <RxCross1
                            className="block h-9 w-9"
                            aria-hidden="true"
                          />
                        ) : (
                          <GiHamburgerMenu
                            className="block h-9 w-9"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                {/* Les ongles du menu */}
                <div className=" bg-green-700 hidden md:block">
                  <div className="flex justify-between items-center">
                    {/* Les liens de nav */}
                    <div className=" hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-2">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? " text-white text-xl font-bold border-white border-b-8"
                                  : "text-gray-300 hover:bg-green-800 hover:text-white",
                                "p-7 text-xl font-bold text-purple uppercase"
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
                      <button className=" bg-black font-semibold rounded-full px-7 py-5 text-2xl text-slate-100">
                        Se connecter
                      </button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className={" md:hidden"}>
                  <div className="space-y-1 px-10 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-green-300 text-white"
                              : "text-purple hover:bg-green-300 hover:text-white",
                            "block rounded-md px-3 py-2 text-lg font-medium text-green-700"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="border-t border-green-700 pt-4">
                    <div className="flex md:flex flex-col gap-2 px-10">
                      <div className="flex gap-2">
                        <LiaPhoneVolumeSolid className=" font-extrabold text-2xl text-green-600" />
                        <div>
                          <h3 className=" text-black text-lg font-bold">
                            Appel
                          </h3>
                          <p className=" text-green-600 text-base font-semibold">
                            (243) 998724266{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <MdOutlineWatchLater className=" font-extrabold text-2xl text-green-600" />
                        <div>
                          <h3 className=" text-black text-lg font-bold">
                            Horaire
                          </h3>
                          <p className=" text-green-600 text-base font-semibold">
                            09:00 - 20:00 Everyday{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <IoLocationOutline className=" font-extrabold text-2xl text-green-600" />
                        <div>
                          <h3 className=" text-black text-lg font-bold">
                            Location
                          </h3>
                          <p className=" text-green-600 text-base font-semibold">
                            0123 Some Place{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 px-10 pb-5">
                      <button className=" bg-green-700 font-semibold rounded-md px-20 py-2 text-xl text-slate-100">
                        Se connecter
                      </button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Menu;
