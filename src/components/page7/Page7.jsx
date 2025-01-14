import React from "react";
import ImageClip from "./ImageClip";
import { motion } from "framer-motion";

const Page7 = () => {
  return (
    <>
      <div className="w-full h-[120vh] bg-zinc-200 overflow-hidden ">
        <div className="w-full  sm:h-[5vh]  pt-5 sm:px-10 px-5">
          <div className=" sm:h-full grid grid-cols-1 grid-rows-3 sm:grid-cols-12 items-center text-2xl sm:text-[1.3vw]">
            <h1 className="sm:col-start-1 col-span-2 items-center uppercase">
              ● FULL benefits
            </h1>
            <h1 className="sm:col-start-6 items-center ">(BO® — 07)</h1>
            <h1 className="sm:col-start-10 col-span-3 justify-self-end">
              CREATIVE AS A SUBSCRIPTION
            </h1>
          </div>
        </div>
        <div className="w-full h-full px-10  text-[31vw]  leading-none font-[ff] uppercase overflow-hidden relative flex flex-col">
          {/* <div className="overflow-hidden relative "><div className="w-full h-[50%] bg-cyan-200">
          <span className="inline-block overflow-hidden translate-y-[10%]">Creative</span></div></div>
          <div className="overflow-hidden flex -mt-[10vw]">
            <div className="with">with</div>
            <div className="image  overflow-hidden mt-[7vw]">
               <ImageClip />
            </div>
          </div>
        
          <div  className="overflow-hidden ml-[5vw] -mt-[10vw]">no fluff</div> */}

          <div 
          
          className="text1 w-full h-[28vw]  overflow-hidden" >
            <motion.div 
            initial={{y:"80%"}}
            viewport={{once:true , amount:0.1}}
            // viewport={{  amount: 0.5 }}
            // animate={{y:0}}
            whileInView={{once: true, y:0}}
            transition={{duration:1 , ease:"easeInOut"}}
            className="flex mt-[0vw]">
              GET
              <span className="mt-[7vw]">
                <ImageClip />
              </span>
              TO
            </motion.div>
          </div>
          <div
          
          className="text2v w-full h-[23vw]  relative overflow-hidden">
            <motion.div
              initial={{y:"80%"}}
            // animate={{translateY:0}}
              viewport={{once:true}}
              whileInView={{ y:0}}
              transition={{duration:1 , ease:"easeInOut"}}
            className="-mt-[7vw] mx-[2vw]">KNOW US</motion.div>
          </div>
          {/* <div className="text3 w-full h-full bg-pink-500"></div> */}
        </div>
      </div>
    </>
  );
};

export default Page7;
