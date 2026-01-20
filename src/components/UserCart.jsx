import React from "react";

const UserOpenableChat = () => {
  return (
    <section className=" flex flex-col">
      <div className="flex justify-between mt-5 cursor-pointer hover:bg-[#d8d7d763] px-2 py-2 rounded">
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
            <p>Yes! OK</p>
          </div>
        </div>

        <div className="">14:54</div>
      </div>
    </section>
  );
};

export default UserOpenableChat;
