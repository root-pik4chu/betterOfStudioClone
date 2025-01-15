import React, { useRef } from "react";
import NavBar from "./NavBar";
import RemainingData from "./RemainingData";


const PageOne = () => {

  

  return (
    <>
      <div  className="w-full h-[340vh] opacity-1 relative text-white ">
        <div className="navBar w-full h-full bg-zinc-900 overflow-hidden" >
          <div className="wrap  w-full h-full "data-scroll data-scroll-speed="-.6">
            <NavBar />
            <RemainingData />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;

// !--------------------------------------------------


