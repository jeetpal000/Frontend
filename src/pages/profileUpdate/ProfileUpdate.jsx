import React, { useState } from "react";
import assets from "../../assets/assets";
import { FaCamera } from "react-icons/fa";
import { getHomePageData, updateProfile } from "../../Api/Api";
import { Link } from "react-router-dom";

const ProfileUpdate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
    

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata.entries());
    const userdata = await getHomePageData();
    console.log(userdata)
    let response = await updateProfile(data, userdata.data.user.id);
    e.target.reset();
    console.log(response)
  }

  return (
    <div className=" relative h-screen w-full bg-[url(./background.png)] bg-cover bg-no-repeat flex justify-center items-center">
      <Link to="/chat" className="absolute top-10 left-10 p-2 shadow-[0_0_10px_#ffff] rounded-xs text-white font-semibold hover:backdrop-blur-2xl">Home</Link>
      <div className=" bg-[#ffffff2c] backdrop-blur-2xl w-100 h-70 mx-auto rounded-md shadow-[0_0_30px_5px_#ccc] flex gap-5 items-center justify-center ">
          <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col items-start justify-center gap-5">
            <div title="Chage your profile" className="cursor-pointer">
              <img
                src={selectedImage || assets.avatar_icon}
                alt=""
                className=" w-18 h-18 rounded-full object-cover "
                onClick={() => document.getElementById("fileInput").click()}
              />
              <FaCamera
                onClick={() => document.getElementById("fileInput").click()}
                className="absolute bottom-46 left-13 p-1 text-2xl bg-[#ffffffba] rounded-full"
              />
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <input
              className="w-full p-2 border border-gray-400 rounded outline-blue-500"
              name="name"
              placeholder="Name"
              required
              type="text"
            />
            <input
              className="w-full p-2 border border-gray-400 rounded outline-blue-500 "
              name="about"
              placeholder="about"
              required
              type="text"
            />
            <button type="submit" className="w-full bg-blue-500 rounded-md p-2 text-white font-semibold cursor-pointer hover:bg-blue-600">Submit</button>
        </div>
          </form>
        <div className="">
          <img
            src={selectedImage || assets.avatar_icon}
            alt="avatar"
            className={`rounded-xs object-cover ${selectedImage ? "w-30 h-40" : "w-24 h-24"} shadow-2xs transform-3d perspective-midrange`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
