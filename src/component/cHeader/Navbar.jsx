import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className=" sticky top-0">
        <div className="container flex justify-between items-center gap-8 mb-4 pt-4">
          <NavLink>
            <img src="../../public/scool_logo.png" alt="logo" className=" w-40 h-20" />
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar