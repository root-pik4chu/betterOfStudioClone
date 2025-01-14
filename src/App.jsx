import { useState } from "react";

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
  const [count, setCount] = useState(0);

  const accordionItems = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "What is Framer Motion?", content: "Framer Motion is a production-ready animation library for React." },
    { title: "Why use Tailwind CSS?", content: "Tailwind CSS allows for utility-first styling, speeding up development." },
  ];
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
