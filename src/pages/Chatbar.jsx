import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import assets from "../assets/assets";

const Chatbar = () => {

  return (
    <section className="relative z-10 h-full w-full flex flex-col">
      {/* //&Chat Header */}
      <header className="w-full">
        <div className="flex justify-between items-center  bg-[#c3c8ca00] border-b-2 border-b-blue-600 backdrop-blur-md px-2 py-2 rounded">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover aspect-square"
              src="https://jeetportfolio-ten.vercel.app/assets/1766307864803~3-CLJF12tW.jpg"
              alt=""
            />
            <div className="">
              <p>
                <strong>Maya Kasuma</strong>
              </p>
              <p>Online</p>
            </div>
          </div>

          <div className=" flex gap-5">
            <IoCallOutline className="text-3xl hover:bg-gray-400 p-1 w-10 rounded cursor-pointer" />
            <IoVideocamOutline className="text-3xl hover:bg-gray-400 p-1 w-10 rounded cursor-pointer" />
            <CiSearch className="text-3xl hover:bg-gray-400 p-1 w-10 rounded cursor-pointer" />
          </div>
        </div>
      </header>

      {/* //& Main Chat */}
      <main className="flex-1">
        <div className="p-2">
          <div className=" w-2/3 gap-4 flex flex-row-reverse items-start justify-between ">
            <p className="bg-blue-400 p-2 rounded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolorem nulla cum quis quae blanditiis, eius error eligendi totam
              sint.
            </p>
            <div className="flex flex-col ">
              <img
                src={assets.pic2}
                alt=""
                className="rounded-full w-[40px] h-[40px] object-cover "
              />
              <p>2:15 PM</p>
            </div>
          </div>
        </div>
      </main>

      {/* //~Foooter */}
      <footer className="absolute mt-auto bottom-0 right-0 left-0 w-full">
        <form
          
          className="flex justify-between items-center  bg-gray-300 px-2 py-2 rounded"
        >
          <div className="flex gap-4 w-full">
            <BsEmojiSmile className="text-3xl hover:bg-gray-400 p-1 w-10 rounded cursor-pointer" />
            <input
              type="file"
              name=""
              id="fileInput"
              className="hidden"
              // onChange={(e) =>)}
            />
            <BiLink
              className="text-3xl hover:bg-gray-400 p-1 w-10 rounded cursor-pointer "
              onClick={() => document.getElementById("fileInput").click()}
            />
            <input
              type="text"
              name=""
              id=""
              value=""
              
              placeholder="Type a message"
              className="w-full outline-0"
            />
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500">
              <LuSend />
            </button>
          </div>

          <div className=" flex gap-5">
            <BiMicrophone className="text-3xl hover:bg-gray-400 p-1 w-10 rounded cursor-pointer" />
          </div>
        </form>
      </footer>
    </section>
  );
};

export default Chatbar;
