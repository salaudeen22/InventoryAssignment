import { FaBox, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav flex justify-between items-center  px-4 py-3 shadow-md rounded-lg md:px-20">
      <div className="flex items-center text-[24px] font-semibold space-x-2 hover:scale-105 transition-all duration-300">
        <FaBox size={30} />
        <h2 className="text-xl">Gyan Grove Inventory</h2>
      </div>

      <div className="navLinks hidden md:flex items-center space-x-8 text-lg font-medium">
        <h3
          className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </h3>
        <h3
          className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
          onClick={() => {
            navigate("/AllItem");
          }}
        >
          All Items
        </h3>
        <h3 className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
          Item Groups
        </h3>
      </div>

      <div className="md:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          <FaBars size={30} />
        </button>
      </div>

      {showMenu && (
        <div className="absolute top-13  bg-white left-0 right-0 p-4 flex flex-col space-y-4 md:hidden">
          <h3 className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
            Home
          </h3>
          <h3 className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
            All Items
          </h3>
          <h3 className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
            Item Groups
          </h3>
        </div>
      )}
    </div>
  );
}

export default Navbar;
