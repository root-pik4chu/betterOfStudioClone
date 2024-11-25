// import React from 'react'
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
const PageTwoPcView = () => {

   const ImgAnimate = useRef(null)
   const fullDiv = useRef(null)
   const wo = useRef(null)
   const rk = useRef(null)

   // useEffect(()=>{
    


      //!----------------
     
      //!---------------- 

        //!----------------
      
      //!---------------- 

     useGSAP(function(){
     

      const tl = gsap.timeline({
         scrollTrigger:{
            trigger:fullDiv.current,
            start:"80% 100%",
            end:"80% -20%",
            scrub: 1,
          
           }
      })
      tl.to(ImgAnimate.current,{
         y:"76vh",
         x:"-2vw",
         scale:"2.9",
      },"a")
      tl.to(wo.current,{
         x:"15vw"
      },"a")
      tl.to(rk.current,{
         x:"-15vw"
      },"a")


     })
      // })
      
      // },[])
    
  return (
   <div  className="w-full sm:h-[220vh]">
   <div className="w-full sm:h-[10vh] grid grid-cols-12 items-center px-[1vw] text-[1.5vw]">
     <div className="col-span-2  uppercase">● Projects</div>
     <div className="col-span-2 col-start-5">(BO® — 02)</div>
     <div className="col-span-8 col-start-8 flex justify-end">
       <div className="border-b-2 border-zinc-900">See all of our work</div>
     </div>
   </div>
   <div className="uppercase w-full  h-[100vh] font-[ff] leading-none">
     <div className="w-full h-[50vh]   flex justify-center items-center">
       <h1 className="text-[32vw]  leading-none">Premium</h1>
     </div>
     <div ref={fullDiv} className="w-full h-[50vh] leading-none flex items-center justify-center text-[32vw] px-[3vw] -mt[1vw]">
       <div className="WO  flex items-end"><h1 ref={wo} className="z-20 ">WO</h1></div>
       <div ref={ImgAnimate} className="z-50 flex items-center rounded-lg overflow-x-hidden">
{/* ----------------------------- */}

{/* -------------------------- */}
         <video
           autoPlay
           muted
           loop
           className=""
           src="https://player.vimeo.com/progressive_redirect/playback/964456701/rendition/1080p/file.mp4?loc=external&signature=ed2837df3216140eefd132460dd1a1e5b5c4a64d42d09edf23898493d96b6e73"
         ></video>
       </div>
       <div className="text-[32vw]  leading-none flex items-end"><h1 ref={rk} className="z-[20] ">RK</h1></div>
     </div>
   </div>
 </div>
  )
}

export default PageTwoPcView
