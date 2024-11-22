import React from "react";

const ResponsiveGrid = () => {
  return (
    <div className="p-2 font-['pp'] font-normal h-[60vh]  items-end sm:h-[50vh]">
      {/* Mobile View */}
      <div className=" sm:hidden flex flex-col justify-between h-full text-white">
        <div className="two_one_by_one text-[9vw] ">
          <div className="p1">
            <p>Premium quality</p>
          </div>
          <div className="p1">
            <p>creative at lean rates</p>
          </div>
          <div className="p1">
            <p>for growing businesses.</p>
          </div>
          <div className="p1">
            <p>Packaged as</p>
          </div>
          <div className="p1">
            <p>subscriptions or</p>
          </div>
          <div className="p1">
            <p>bundled projects.</p>
          </div>
        </div>
        <div className="chota_para text-[5.5vw] h-[16vh] flex flex-col justify-between ">
          <p>
            Pick a plan, submit a job request, and your project will kickoff
            within 24 hours.
          </p>
          <div className=" flex justify-between h-[4vh] border-b w-[70%]">
            <p>Explore Plans</p>
            <div className="">icon</div>
          </div>
        </div>
      </div>

      {/* PC View */}
      <div className="hidden sm:flex justify-between items-end p-4 text-xl text-white w-full h-[40vh] ">
        <div className="w-[20vw] h-[20vh] flex flex-col justify-between">
          <p>Pick a plan, submit a job request, and your project will kickoff within 24 hours</p>
          <div className="first_para flex justify-between w-full p-2 border-b-2">
            <p>Explore Plans</p>
            <div className="">icon</div>
          </div>
        </div>
        <div className="biger_one h-[20vh] w-[55vw]  text-[3.2vw] flex flex-col leading-none">
          <div className="one"><p>Premium quality creative at lean rates</p></div>
          <div className="one"><p>for growing businesses. Packaged as</p></div>
          <div className="one"><p>subscriptions or bundled projects.</p></div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
