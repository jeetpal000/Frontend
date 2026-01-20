import React, { useState,  useRef, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { GiCircleClaws } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Api/Api";
import ConfirmPopUp from "../components/ConfirmPopUp";

const Navbar = ({ toggleNavbar }) => {
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const [isOpenProfile, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };
  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); 
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <header className="bg-[#8e58fb00] backdrop-blur-2xl py-4 px-2 flex flex-col justify-between items-center h-full w-13">
      <div className="flex flex-col gap-3 text-white">
        <IoIosMenu
          onClick={toggleNavbar}
          title="Menu"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer hover:text-black"
        />
        <BsChatDots
          title="Chat"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer hover:text-black"
        />
        <IoCallOutline
          title="Calls"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer hover:text-black"
        />
        <GiCircleClaws
          title="Status"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer hover:text-black"
        />
      </div>
      <div className="relative flex flex-col gap-3 text-white">
        <CiStar
          title="Favorite"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer hover:text-black"
        />
        <CiShop
          title="Community"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer border-b hover:text-black"
        />
        <IoSettingsOutline
          title="Settings"
          className=" text-3xl hover:bg-[#e7e6e6ce] p-1 w-10 rounded cursor-pointer hover:text-black"
        />
        <FaRegUserCircle
          title="User"
          className=" text-3xl hover:bg-[#e7e6e6ce] text-gray-100 hover:text-black p-1 w-10 rounded cursor-pointer relative"
          onClick={() => setIsOpen(!isOpenProfile)}
        />

        {isOpenProfile &&
          createPortal(
            <div ref={dropdownRef} className="text-white absolute pointer-events-auto z-50 bottom-12 left-13 bg-[#dbd5d500] backdrop-blur-md p-2 rounded-md shadow-[5px_10px_20px_#cccddd]  w-35 ">
              <div className="z-50 flex flex-col items-start gap-1">
                <Link to="/profile" className="hover:bg-[#ffffff49] w-full p-1 rounded">Edit profile</Link>
                <button onClick={()=>setIsConfirmOpen(true)} className="cursor-pointer text-left hover:bg-[#ffffff49] w-full p-1 rounded">logout</button>
              </div>
            </div>,
            document.body,
          )}

        {/* Confirm Modal */}
        {isConfirmOpen &&
          createPortal(
            <ConfirmPopUp setIsConfirmOpen={setIsConfirmOpen} handleLogout={handleLogout} />,
            document.body,
          )}
      </div>
    </header>
  );
};

export default Navbar;
