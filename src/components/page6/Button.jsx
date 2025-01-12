import { React, ref, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import gsap from "gsap";
const Button = () => {
  const spanRef = useRef(null);

  const handleHoverOut = () => {
    gsap.to(spanRef.current, {
      height: "0%",
      top: "100%",
      scale: 1.3,

      duration: 0.5,
      ease: "easeInOut",
    });
  };

  const handleHoverIn = () => {
    gsap.to(spanRef.current, {
      height: "100%",
      scale: 2,
      top: "0%",
      duration: 0.5,
      ease: "easeInOut",
    });
  };

  return (
    <div className="relative w-full h-[64%] rounded-md  bg-zinc-900">
      <div className="w-[100%] h-[100%] overflow-hidden ">
        <div
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          className="relative flex justify-between items-center text-[1.2vw] overflow-hidden rounded-md  text-zinc-50 hover:text-black transition duration-300 ease-in-out "
        >
          {/* <div className="absolute w-[100%] h-[100%] bg-red-900 translate-y-2 "></div> */}
          <span
            ref={spanRef}
            className="w-[50%] h-[100%] bg-lime-300 absolute rounded-md  translate-x-[50%] top-[100%]"
          />
          <div className=" w-full flex justify-between p-[1.5vw] z-10">
            <div className=" ">
              <h1>Subscribe Now</h1>{" "}
            </div>{" "}
            <MdArrowOutward />
          </div>
        </div>
      </div>
      <p className="w-full flex items-center h-[3vw] text-[1.1vw] justify-center">
        Need more info? Let’s chat.
      </p>
    </div>
  );
};

export default Button;
