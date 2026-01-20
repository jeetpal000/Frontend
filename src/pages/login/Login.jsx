import { useState } from "react";
import {useNavigate} from "react-router-dom"
import assets from "../../assets/assets.js";
import { toast } from "react-toastify";
import { loginPost, registrationPost } from "../../Api/Api.js";
// import { useEffect } from "react";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      let response;
      if (currState === "Sign up") {
        response = await registrationPost(data)
      } else {
        response = await loginPost(data)
      }
      
      // console.log(response.data.message);
      e.target.reset();
      if(response.status === 201){
        // console.log(response)
        (currState==="Sign up")?(toast.success(response.data.message, {position: "top-right", autoClose: 3000})
        ):(toast.success(response.data.message, {position: "top-right", autoClose: 3000}))
        navigate("/chat")
      }else{
        console.log("first")
      }
    } catch (error) {
      console.log("Error: ", error);
      toast.error(error.response.data, {position: "top-right", autoClose: 3000})
    }
  };

 

  return (
    <div className=" min-h-screen bg-[url(./background.png)] bg-no-repeat bg-cover flex items-center justify-evenly">
      <img src={assets.logo_big} alt="" className="w-50" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 bg-[#ffffff20] shadow-[0_0_30px_5px_#ccc] backdrop-blur-2xl rounded p-4"
      >
        <h2 className="text-center text-2xl font-bold ">{currState}</h2>
        {currState === "Sign up" ? (
          <input
            className="w-full p-2 border border-gray-400 rounded outline-blue-500 "
            name="name"
            placeholder="Name"
            required
            type="text"
          />
        ) : null}

        <input
          className="w-full p-2 border border-gray-400 rounded outline-blue-500 "
          name="email"
          placeholder="email"
          required
          type="email"
        />
        <input
          className="w-full p-2 border border-gray-400 rounded outline-blue-500 "
          name="password"
          placeholder="password"
          required
          type="password"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 rounded text-white font-bold cursor-pointer p-2 text-xl"
        >
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>
        {/* // privacy */}
        <div className="flex gap-2 text-gray-500">
          {/* <input
            className="p-2 border border-gray-400 rounded outline-blue-500 cursor-pointer "
            type="checkbox"
            name="checkbox"
            id="checkbox"
          /> */}
          <label htmlFor="checkbox">
            Agree t the terms of use & privacy policy.
          </label>
        </div>
        {/* // login */}

        <div className="">
          {currState === "Sign up" ? (
            <p className="">
              Already have an account{" "}
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => setCurrState("Login")}
              >
                login here
              </span>
            </p>
          ) : (
            <p className="">
              Create an account{" "}
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => setCurrState("Sign up")}
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
