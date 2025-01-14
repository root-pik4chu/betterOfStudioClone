import { useState ,useEffect} from "react";

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



function App() {
  const locomotiveScroll = new LocomotiveScroll({
    
  });
 


  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Specify the scroll container
      smooth: true,
      lerp: 0.4, 
      multiplier: 1, 
      direction: "vertical", 
    });

    // Cleanup on component unmount
    return () => {
      locomotiveScroll.destroy();
    };


    window.scrollTo(0, 0);
  }, []);
  

  return (

    <>
      <div className="font-['pp']">

        {/* <GradientTextAnimation /> */}

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
          <Page8 />

        </LocomotiveScrollWrapper>
        
        



       
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

export default App;
