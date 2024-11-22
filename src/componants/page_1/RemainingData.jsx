import React from "react";
import Marquee from "./Marquee";
import ResponsiveGrid from "../ResponsiveGrid";
import TextDivision from "./TextDivision";
import Table from "./Table";

const RemainingData = () => {
  return (
    <div className="w-full h-[90vh]  sm:h-[130vh]  font-['pp'] font-thin">
      <div className="full_wrapper_text_div h-full w-full flex flex-col justify-between items-center  ">
        <div className="text_wrapper  h-[90%] sm:h-[50vh] w-full   sm:-my-0 order-2 sm:order-1">
          <div className="text font-normal text-5xl w-full h-full  ">
            <ResponsiveGrid />
          </div>
        </div>
        <div className="marquee_wrapper h-[35%] sm:h-[60%] w-full order-1 sm:order-2">
          <div className="infinityScroller h-full w-full sm:-my-[7vw]">
            <Marquee />
          </div>
        </div>
      </div>
      <div className="text_division h-screen w-full">
        <TextDivision />
        <Table />
      </div>
    </div>
  );
};

export default RemainingData;









