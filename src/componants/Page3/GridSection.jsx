import React from "react";

const GridSection = () => {
  return (
    <div className=" w-full h-full p-[1vw]">
      <div className="grid grid-cols-1 w-full sm:grid-cols-3 h-full sm:grid-rows-[40vh,70vh,82vh] grid-rows-[5vh,18vh,24vh,110vh] gap-[1vw] p-[1vw] ">
        <div className="col-span-1 row-span-1  sm:w-30 sm:col-span-1 rounded-lg  ">
          <div className="text-[5.5vw] sm:text-[1.5vw] bg-pink-500">
            <div className="">● CONCIERGE CREATIVE</div>
            <div className="">(BO® — 03)</div>
          </div>
        </div>
        <div className="col-span-1 row-span-1  sm:w-70 sm:col-span-2 rounded-lg uppercase flex items-center justify-center text-[32vw] sm:text-[22.5vw] sm:leading-none font-[ff] bg-red-500">
      
            <h1>Services</h1>
         
        </div>
        <div className="col-span-1 row-span-1  sm:row-span-1 sm:col-span-full rounded-lg bg-red-500">
          
          <div className="text-[8.9vw] sm:text-[3.5vw] font-medium leading-none text-zinc-800 ">
            <div className="">
              <p>
                <span>Superior brands require sophisticated</span>
              </p>
              <p>
                <span>capabilities that many businesses couldn't</span>
              </p>
              <p>
                <span>access until now.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-red-400 sm:row-span-1 sm:col-span-2 sm:col-start-2 rounded-lg">
          <div className="">
            <h1>root</h1>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
