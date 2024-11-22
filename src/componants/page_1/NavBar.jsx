import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[12vh] flex items-center justify-between p-4 -my-2 text-white font-['pp']">
      <div className="logo w-1/2 sm:w-[33.33%] ">
        <img
          className="w-[70%] sm:w-[25%]"
          src="https://betteroff.studio/logo.svg"
          alt=""
        />
      </div>

      <div className="anotherItem flex gap-6 text-xl sm:hidden">
        <p className="font-normal">Pricing</p>
        <p  className="font-normal">menu</p>
      </div>


      <div className="desktopIcons hidden sm:flex sm:items-center  w-[66.66%] h-full ">
        <div className="fist_three_item h-full w-1/2  flex items-center justify-center gap-10">
          {
            ["Overview", "Work", "Feed"].map((item, index) => (
              <h1 key={index} className="text-xl font-normal  ">{item}</h1>
            ))
          
          }
        </div>


        <div className="last_three_item h-full w-1/2  text-xl font-semibold flex items-center justify-end ">
          <h1>Pricing</h1>
        </div>


      </div>
    </div>
  );
};

export default NavBar;
