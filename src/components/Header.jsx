import { BsCart4 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#216cdd]  bg-opacity-80 shadow-lg  fixed  w-screen z-40 backdrop-brightness-80 backdrop-blur-lg  text-white  p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Brand Logo" className="w-full h-12 bg-white"/>
        <h1 className="ml-4 text-2xl font-bold">ClickShop</h1>
      </div>
      <nav className="flex space-x-12 ">
        <a href="#" className="hover:bg-yellow-500 hover:text-white  text-white p-2 transition-all duration-200 ease-in-out">Home</a>
        <a href="#" className="hover:bg-yellow-500 hover:text-white text-white p-2 transition-all duration-200 ease-in-out">Shop</a>
        <a href="#" className="hover:bg-yellow-500 hover:text-white text-white p-2 transition-all duration-200 ease-in-out">Explore</a>
      
      </nav>
      <div className="flex items-center space-x-4 relative right-4">
        <input type="text" placeholder="Search..." className="p-2 rounded-md"/>
        <div className="flex space-x-2">
          <a href="#" className="text-white"><BsCart4 size={28}/></a>
          <a href="#" className="text-white"><FaUserAlt size={28}/></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
