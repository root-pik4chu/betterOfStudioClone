import { useState } from "react";

import "./App.css";

import PageTwo from "./componants/PageTwo";
import LocomotiveScroll from "locomotive-scroll";
import PageOne from "./componants/page_1/PageOne";
import PageThree from "./componants/Page3/PageThree";
import OriginalDragSystemWithInfo from "./componants/OriginalDragSystemWithInfo";
import Page4Image from "./componants/Page4Image";
import PageFiveWrapper from "./componants/page5/PageFiveWrapper";



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [count, setCount] = useState(0);

  const accordionItems = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "What is Framer Motion?", content: "Framer Motion is a production-ready animation library for React." },
    { title: "Why use Tailwind CSS?", content: "Tailwind CSS allows for utility-first styling, speeding up development." },
  ];
  return (
    <>
      <div className="font-['pp']">
        <PageOne />

        <PageTwo />
        <PageThree />
       
        <OriginalDragSystemWithInfo />
        
        <Page4Image /> 
        <PageFiveWrapper />
        
       
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
