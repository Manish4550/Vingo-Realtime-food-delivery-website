import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

function Nav() {
  const { userData } = useSelector((state) => state.user);
  const [ShowInfo, setShowInfo] = useState(false)

  return (
    <div className="w-full h-20 flex items-center justify-between md:justify-center gap-6 px-5 fixed top-0 z-50 bg-[#fff9f6]">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-[#ff4d2d]">
        QuickBite
      </h1>

      {/* Location + Search */}
      <div className="md:w-[60%] lg:w-[40%] h-14 bg-white shadow-lg rounded-lg items-center gap-4 hidden md:flex px-3">

        {/* Location */}
        <div className="flex items-center w-[30%] overflow-hidden gap-2 px-2 border-r border-gray-300">
          <FaLocationDot size={22} className="text-[#ff4d2d]" />
          <div className="truncate text-gray-600 text-sm">
            Jhansi
          </div>
        </div>

        {/* Search */}
        <div className="w-[70%] flex items-center gap-2 px-2">
          <IoIosSearch size={22} className="text-[#ff4d2d]" />
          <input
            type="text"
            placeholder="Search delicious food..."
            className="text-gray-700 outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Cart */}
        <div className="relative cursor-pointer">
          <FiShoppingCart size={24} className="text-[#ff4d2d]" />
          <span className="absolute -top-2 -right-2 text-xs bg-[#ff4d2d] text-white rounded-full px-1.5">
            0
          </span>
        </div>
        
        {/* My Orders Button (Desktop Only) */}
        <button className="hidden md:block px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] text-sm font-medium">
          My Orders
        </button>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff4d2d] text-white text-sm shadow-md font-semibold cursor-pointer" onClick={()=>setShowInfo(prev=>!prev)}>
          {userData?.fullName?.slice(0, 1)}
        </div>

        {ShowInfo && 
        <div className="fixed top-[80px] right-[10px] md:right-[10%] lg:right-[25%] w-[180px] bg-white shadow-2xl rounded-xl p-[20px] flex flex-col gap-[10px] z-[9999] ">
            <div className="text-[17px] font-semibold">
            {userData.fullName}
            </div>
            <div className="md:hidden text-[#ff4d2d] font-semibold cursor-pointer">My Orders</div>
            <div className="text-[#ff4d2d] font-semibold cursor-pointer">Log Out</div>
        </div>}


      </div>
    </div>
  );
}

export default Nav;
