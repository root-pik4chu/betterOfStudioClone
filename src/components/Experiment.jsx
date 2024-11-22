import React, { useState } from "react";
import { motion } from "framer-motion";
const Experiment = ({ item }) => {
  const [activeInddx, setActiveIndex] = useState(item[0]);

  const toggle = (index) => {
    setActiveIndex(index === activeInddx ? null : index);
  };

  return (
    <div className="flex w-[100%] h-screen bg-zinc-900 text-white items-center justify-center flex-col text-[1.2vw] p-[5vw]">
      {item.map((item, index) => {
        // console.log(item);
        return (
          <div className="W-[40%]">
            <div
              className="bg-red-500  p-[1vw] rounded-sm"
              onClick={() => {
                toggle(index);
              }}
            >
              {item.title}
            </div>

            <motion.div
              className="bg-red-800 p-[5pw] overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: activeInddx === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-[2vw]">
                 {item.content}

              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiment;
