import React, { useState } from "react";
import { motion } from "framer-motion";

const SwitchDivisions = () => {
  const [clicked, setClicked] = useState(false); // Track the state of the button

  const handleClick = () => {
    setClicked(!clicked); // Toggle the button state on click
  };
  console.log("yep");
  
  const data = [
    "Bundled projects are for clients who know",
    "exactly what they need. Okjhkghkhff the shelf and",
    "on-target, everything included.jhjgjghjhgjgjhg",
  ];

  return (
    <>
      <div className="w-[20vw] text-[1.2vw] h-[10vh] mt-20 flex items-center gap-3 justify-center">
        <h1>Subscription</h1>

        <div className="relative w-20">
          {/* Button */}
          <motion.button
            onClick={handleClick}
            transition={{ type: "spring" }}
            className="relative w-full h-10 rounded-[30px] border-2 border-zinc-700 cursor-pointer flex items-center justify-center overflow-hidden bg-zinc-700"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: clicked ? "120%" : 0 }}
              transition={{ type: "spring" }}
              className="absolute left-1 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full"
            />
          </motion.button>
        </div>

        <h1>Projectskjhkhj</h1>
      </div>

      <div className="grid grid-cols-12 w-[70vw] h-[30vh] bg-red-100 relative">
        <div className="col-span-12 pt-[2vw] text-[3vw]">
          {data.map((item, index) => (
            <p key={index} className="leading-none overflow-hidden">
              <motion.span
                key={`${item}-${clicked}`} // Unique key to trigger re-animation
                initial={{ y: "0%" }}
                animate={{
                  y: clicked ? ["0%", "-100%", "100%", "0%"] : "0%",
                }}
                transition={{
                  duration: clicked ? 2 : 1, // Adjust duration for sequential animation
                  times: [0, 0.4, 0.8, 1], // Control timing of each phase
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="inline-block bg-green-500"
              >
                {item}
              </motion.span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default SwitchDivisions;
