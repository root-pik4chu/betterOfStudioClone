import {React , useRef , useEffect}from "react";
import { backOut, easeInOut, motion } from "framer-motion";

import {gsap} from "gsap";
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Power4 } from "gsap-trial/src/all";

gsap.registerPlugin(ScrollTrigger);


const Marquee = () => {
  const data1 = useRef(null);
  const data2 = useRef(null);
  const data3 = useRef(null);
  const data4 = useRef(null);


  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     const animations = [
  //       { target: data1.current, props: { fontSize: "40vw" } },
  //       { target: data2.current, props: { fontSize: "40vw" } },
  //       { target: data3.current, props: { width: "37vw" } },
  //       { target: data4.current, props: { width: "37vw" } },
  //     ];
  
  //     animations.forEach(({ target, props }) => {
  //       gsap.to(target, {
  //         ...props,
  //         scrollTrigger: {
  //           start: "6% 70%",
  //           end: "8% 60%",
  //           scrub: 2,
  //           // markers:true,
  //         },
  //       });
  //     });
  //   }
    
  // }, []);

  return (
    <div className=" text-whitek   font-['ff']  leading-none -my-10 overflow-hidden" >
      <motion.div 
      initial={{y:350}}
      animate={{y:0}}
      transition={{duration:.9 , 
        ease:[.5,0,.66,.12] }}
      className=" flex">

      <motion.div
        className="flex flex-shrink-0"
        innitial={{x:0}}
        animate={{ x:  "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
       
        <div className="marqueeSection flex items-center justify-center flex-shrink-0 w-fit">
          <div ref={data1} className="leading-none text-[60vw] sm:text-[30vw]">SUBSCRIBE</div>

            <img 
            ref={data3}
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800"
              alt="marquee"
              className=" w-[59vw] sm:w-[28vw] sm:mt-[3vw] inline-block mt-6 px-3"
            />
   
        </div>
      </motion.div>
      <motion.div
        className="flex flex-shrink-0"
        innitial={{x:0}}
        animate={{ x:  "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
       
        <div className="marqueeSection flex items-center justify-center flex-shrink-0 w-fit">
          <div ref={data2} className="leading-none text-[60vw] sm:text-[30vw]"><p><span>SUBSCRIBE</span></p></div>

            <img 
            ref={data4}
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&dpr=1.5&fit=max&h=800&w=800"
              alt="marquee"
              className=" w-[59vw] sm:w-[28vw] sm:mt-[3vw] inline-block mt-6 px-3"
            />
   
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Marquee;
