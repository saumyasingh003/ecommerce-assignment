import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#216cdd] bg-opacity-80 shadow-lg fixed w-screen z-40 backdrop-brightness-80 backdrop-blur-lg text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Brand Logo" className="w-8 h-8 lg:w-12 lg:h-12"/>
        <h1 className="ml-4 text-lg lg:text-2xl font-bold">ClickShop</h1>
      </div>
      <nav className={`lg:flex space-x-12 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <a href="#" className="hover:bg-yellow-500 hover:text-white text-white p-2 transition-all duration-200 ease-in-out">Home</a>
        <a href="#" className="hover:bg-yellow-500 hover:text-white text-white p-2 transition-all duration-200 ease-in-out">Shop</a>
      </nav>
      <div className="flex items-center space-x-4 relative right-4">
        <input type="text" placeholder="Search..." className="p-2 rounded-md hidden lg:block"/>
        <div className="flex space-x-2">
          <a href="#" className="text-white"><BsCart4 size={28}/></a>
          <a href="#" className="text-white"><FaUserAlt size={28}/></a>
        </div>
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={28}/> : <GiHamburgerMenu size={28}/>}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#216cdd] lg:hidden flex flex-col items-center space-y-4 p-4">
          <a href="#" className="hover:bg-yellow-500 hover:text-white text-white p-2 transition-all duration-200 ease-in-out">Home</a>
          <a href="#" className="hover:bg-yellow-500 hover:text-white text-white p-2 transition-all duration-200 ease-in-out">Shop</a>
          <input type="text" placeholder="Search..." className="p-2 rounded-md w-full"/>
        </div>
      )}
    </header>
  );
};

export default Header;
