import { Link } from "react-router-dom"


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
                
              </div>
              <div className="flex gap-5"></div>
              <div className="flex gap-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu