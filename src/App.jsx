import { useState ,useEffect, useRef} from "react";

import "./App.css";

import PageTwo from "./components/PageTwo";
import LocomotiveScroll from "locomotive-scroll";
import PageOne from "./components/page_1/PageOne";
import PageThree from "./components/Page3/PageThree";
import OriginalDragSystemWithInfo from "./components/OriginalDragSystemWithInfo";
import Page4Image from "./components/Page4Image";
import PageFiveWrapper from "./components/page5/PageFiveWrapper";
import GradientTextAnimation from "./components/loader/GradientTextAnimation ";
import LocomotiveScrollWrapper from "./LocomotiveScrollWrapper";
import PageSixWrapper from "./components/page6/PageSixWrapper";
import SwitchDivisions from "./components/page6/ButtonWithAnimations";
import Page7 from "./components/page7/Page7";
import Page8 from "./components/Page8/Page8";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



function App() {
  // const locomotiveScroll = new LocomotiveScroll({
    
  // });
 

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Specify the scroll container
      smooth: true,
      lerp: 0.4, 
      multiplier: 1, 
      direction: "vertical", 
    });

    const loaderTimeout = setTimeout(() => {
      setIsLoading(false); // Hide loader after 3 seconds
    }, 3000);

    // Cleanup on component unmount
    return () => {
      locomotiveScroll.destroy();
      clearTimeout(loaderTimeout);
      window.scrollTo(0, 0);
    };


  }, []);
  

  return (

    <>
      <div className="font-['pp']">

        {/* <GradientTextAnimation /> */}

        {
          isLoading ? 
          
          <Loader /> : 
          
          (
            <LocomotiveScrollWrapper>

            <PageOne />
  
            <PageTwo />
            <PageThree />
  
            <OriginalDragSystemWithInfo />
  
            <Page4Image /> 
            <PageFiveWrapper />
  
            <PageSixWrapper />
            
            <Page7 />
  
            <Page8 />
            
  
          </LocomotiveScrollWrapper>
          )
        }
       
        {/* <Loader /> */}
        

      
         
  
       
        {/* something */}
        
        {/* <DropDown /> */}
        {/* <DraggableList /> */}
        {/* <Accordion /> */}
        {/* <ResponsiveGrid /> */}
        {/* <TextImageSection /> */}
        {/* <NewNavBarCompo items={accordionItems}/> */}
        {/* <Experiment item = {accordionItems} /> */}
      </div>
    </>
  );
}


const Loader = () => {

  const centerLine = useRef();
  const upper = useRef();
  const lower = useRef();
  const opacity = useRef();
  useGSAP(()=>{
    const tl = gsap.timeline();

   

    tl.to(centerLine.current, {
      duration: 1,
      width: "100%",
      ease: "expo.inOut",
      transformOrigin: "right",
      
    })
    .to(upper.current, {
      duration: 1,
      translateY: "-100%",
      ease: "expo.inOut",
      
    },"a")
    .to(lower.current, {
      duration: 1,
      translateY: "100%",
      ease: "expo.inOut",
      
    },"a")
    tl.to(centerLine.current, {
      opacity: 0,
      duration: 1,
      // transformOrigin: "right",
      
    })
    .to(opacity.current, {
      duration: 5,
      zIndex: -1, // Move loader behind page content
      delay: 6, // Wait for fade-out to finish before hiding
      opacity:0,
    })
  },[])

  return (
    <>
      <div ref={opacity} className="w-full h-screen flex justify-center items-center bg-zinc-900 overflow-hidden">
        <div ref={centerLine} className="z-10 absolute w-[2%] h-[1px] bg-zinc-500 left-0 "></div>
        <div className="h-screen w-full flex flex-col justify-center items-center ">
        <div ref={upper} className="w-full h-[50%] bg-zinc-800 -translate-y-[0%]"></div>
        <div ref={lower} className="w-full h-[50%] bg-zinc-800 translate-y-[0%]"></div>
        </div>
        {/* <div className="absolute"></div> */}
      </div>

    </>
  );
};


export default App;
