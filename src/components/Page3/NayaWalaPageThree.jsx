import React, { useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { motion } from "framer-motion";

const NayaWalaPageThree = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(items[0]);

  const toggle = (index) => {
    setActiveIndex(activeIndex == index ? null : index);
  };
  return (
    <div>
      <div className="w-full h-auto bg-zinc-900 text-white grid sm:grid-cols-12 grid-cols-8 p-[2vw]">
        <div className="col-span-8 text-[5.5vw] sm:col-span-3 sm:text-[1.2vw] sm:order-1 sm:col-start-1">
          <div className="">● CONCIERGE CREATIVE</div>
          <div className="">(BO® — 03)</div>
        </div>
        <div className="col-span-8 sm:col-span-12 sm:text-[32vw] text-[30vw] leading-none font-[ff] mt-[10vw] sm:mt-[0]  sm:order-3">
          <div className=" uppercase">
            <h1 className="text-center">Services</h1>
          </div>
        </div>
        <div className="col-span-8 text-[9.5vw] sm:text-[3.5vw] sm:col-span-10 leading-none mt-[10vw] sm:mt-0 sm:order-2 sm:col-start-5 ">
          <div className="">Superior brands require sophisticated</div>
          <div className="">capabilities that many businesses couldn't</div>
          <div className="">access until now.</div>
        </div>
        <div className="col-span-8 sm:col-span-7 sm:col-start-5 mt-[10vw] sm:mt-[5vw] sm:order-4">
          <div className="h-auto">
            <div className="text-[5vw] sm:text-[1.5vw] border-b-[1px] border-zinc-700 pb-[2vw]">
              <h3>Our process and capabilites include:</h3>
            </div>
            {items.map((item, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="w-full border-b-[1px] border-zinc-700 mb-[5vw] sm:mb-0">
                    <div
                      className="flex w-full justify-between  text-[5.2vw] sm:text-[1.2vw] py-[5vw] sm:py-[2vw]"
                      onClick={() => toggle(index)}
                    >
                      <span className="capitalize">{item.name}</span>
                      <span className="text-[8vw] sm:text-[1.2vw]">
                        <PiPlusBold />
                      </span>
                    </div>
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: activeIndex === index ? "auto" : 0 }}
                      transition={{ duration: 0.5, ease: "easeIn" }}
                    >
                      <div className="py-[10vw] sm:py-0 sm:text-[1.2vw]">
                        <p>{item.data}</p>
                        <div className="  flex gap-[2vw] mt-[5vw] sm:mt-[2vw]">
                          {item.buttons.map((button, i) => {
                            return (
                              <div  className="w-fit p-[1.2vw] sm:p-[.5vw] sm:text-[1.2vw] bg-zinc-200 rounded-sm text-zinc-900 mb-[4vw]">
                                {button}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NayaWalaPageThree;
