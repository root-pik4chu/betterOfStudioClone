import React from "react";
import Button from "./Button";
import { IoCheckmarkSharp } from "react-icons/io5";
const Card = () => {
  return (
    <>
      <div className="w-full h-[118vh] bg-zinc-800 border-[1px] border-zinc-700 flex items-center justify-between rounded-2xl flex-col ">
        <div className="text_Section_One w-full h-[45%]  text-zinc-300 ">
          <div className="colorBox w-[9vw] h-[5vh] bg-pink-400 rounded-lg mx-[2vw] -my-5 flex items-center justify-center text-[1.1vw] capitalize">
            most populer
          </div>
          <div className="small_heading w-full h-[60%]  py-[5vw] px-[2vw]">
            <h1 className="text-[1.5vw]">Part-Time Pro</h1>
            <br />
            <p className="text-[1.4vw] ">
              One part-time creative dedicated to your continuous stream of
              projects
            </p>
          </div>
          <div className=" text-[1.4vw] px-[2vw]">
            <div className="flex">
              <div className="">$</div>
              <div className="price ">
                <span className="text-[4.5vw]">1600</span>/month
              </div>
            </div>
            <p className="text-[1.2vw] -my-[1.5vw]">Pause or cancel anytime.</p>
          </div>
        </div>
        <div className=" Button_Section w-[100%] h-[16%] p-[1vw]  ">
          <Button />
        </div>
        <div className="One_Liner w-full h-[39%] py-[1vw] px-[1vw] text-zinc-400 bg-zinc-900 overflow-hidden rounded-b-2xl">
          <h1 className="text-[1.3vw] py-[1vw]">What's included</h1>
          <div className="flex gap-[1vw] text-[1.1vw] py-[0.5vw]">
            <IoCheckmarkSharp />
            <p>One dedicated creative, 20 hrs a week</p>
          </div>
          <div className="flex gap-[1vw] text-[1.1vw] py-[0.5vw]">
            <IoCheckmarkSharp />
            <p>One dedicated creative, 20 hrs a week</p>
          </div>
          <div className="flex gap-[1vw] text-[1.1vw] py-[0.5vw]">
            <IoCheckmarkSharp />
            <p>One dedicated creative, 20 hrs a week</p>
          </div>
          <div className="flex gap-[1vw] text-[1.1vw] py-[0.5vw]">
            <IoCheckmarkSharp />
            <p>One dedicated creative, 20 hrs a week</p>
          </div>
          <div className="flex gap-[1vw] text-[1.1vw] py-[0.5vw]">
            <IoCheckmarkSharp />
            <p>One dedicated creative, 20 hrs a week</p>
          </div>
          <div className="flex gap-[1vw] text-[1.1vw] py-[0.5vw]">
            <IoCheckmarkSharp />
            <p>One dedicated creative, 20 hrs a week</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
