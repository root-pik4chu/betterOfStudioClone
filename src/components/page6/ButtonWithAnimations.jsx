import React, { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";

const SwitchDivisions = ({trueOrFalse}) => {
  const [clicked, setClicked] = useState(false); // Track the state of the button

  const handleClick = () => {
    setClicked(!clicked); // Toggle the button state on click
    trueOrFalse(!clicked);
  };  

  const data = [
    "Bundled projects are for clients who know",
    "exactly what they need. Off the shelf and",
    "on-target, everything included."
  ]
  const data2 = [
    "Subscriptions are like having an in-house",
    "creative department without the headaches of",
    "managing salaried employees."
  ]
 
  return (
    
    <>
      <div className="w-[20vw] text-[1.4vw] h-[10vh] mt-20 flex items-center gap-3 justify-start ">
        <h1>Subscription</h1>

        <div className="relative w-20">
          {/* Button */}
          <motion.button
            onClick={handleClick}
            // initial={{ backgroundColor: "#3498db" }}
            // animate={{ backgroundColor: clicked ? "#2ecc71" : "#3498db" }}
            transition={{ type: "spring" }}
            className="relative w-full h-10 rounded-[30px] border-2 border-zinc-700 cursor-pointer flex items-center justify-center overflow-hidden bg-zinc-700 "
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: clicked ? "120%" : 0 }}
              transition={{ type: "spring" }}
              className="absolute  left-1 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full"
            />
          </motion.button>
        </div>

        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-12 w-[70vw] h-[30vh] relative">
        <div className="col-span-12  pt-[2vw]  text-[3vw] absolute">
          {
          
          data2.map((item , index)=>{
          
            return<p className="leading-none overflow-hidden">
            
                <motion.span
                key={{clicked}}
                  initial={{ y:"0%"  , opacity:1 }}
                  animate={{ y: clicked ? "100%" : "0" , opacity: clicked ? 0 :1}}
                  // exit={{ y:clicked ? "-100%" : "100%"}}
                  transition={{ duration: 1.2 , type:"spring" , delay:index *0.03}}
                  
                  className="inline-block"
                >
                  {item}
                  
                </motion.span>
               
                </p>
              })

            }
          
           
          
        </div>
        <div className="col-span-12  pt-[2vw]  text-[3vw]">
          {
          
          data.map((item , index)=>{
          
            return<p className="leading-none overflow-hidden">
            
                <motion.span
                key={{clicked}}
                  initial={{ y:"100%" , opacity:1}}
                  animate={{ y: clicked ? "0%" : "100%" , opacity: clicked ? 1 :0}}
                  // exit={{ y:clicked ? "-100%" : "100%"}}
                  transition={{ duration: 1.2 ,  type:"spring" , delay:index *0.03}}
                  
                  className="inline-block "
                >
                  {item}
                  
                </motion.span>
               
                </p>
              })

            }
          
           
          
        </div>
        {/* <div className="col-span-12 absolute  bg-red-300 text-[3vw]">
          <p><span>Subscriptions are like having an in-house</span></p>
        </div>  */}
      </div>
    </>
  );
};

export default SwitchDivisions;
