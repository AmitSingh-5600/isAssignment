import { FaShoppingCart, FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-blue-300 h-18 flex gap-10 py-3 px-12 items-center ">
      <NavLink to="/">
        <FaHome className="size-8 text-white" />
      </NavLink>
      <div className="flex flex-1 justify-end gap-10">
        <NavLink to="/add">
          <LuLayoutDashboard className="size-8 text-white" />
        </NavLink>
        <NavLink to="cart" className="flex">
          <FaShoppingCart className="size-8 text-white" />
          <p className="bg-white w-5 h-5  text-center  rounded-full relative -left-2.5 -top-2">
            7
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
