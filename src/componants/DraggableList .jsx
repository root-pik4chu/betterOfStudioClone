import React from "react";
import { motion } from "framer-motion";

const DraggableList = () => {
  const names = ["Option A", "Option B", "Option C", "Option D", "Option E"]; 

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex cursor-grab sm:cursor-auto" 
        drag="x" 
        dragConstraints={{ left: -300, right: 0 }} 
      >
        {names.map((name, index) => (
          <div
            key={index}
            className="min-w-[40vw] sm:min-w-[20%] bg-gray-200 p-4 rounded-lg mr-4 box-border"
          >
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>This is {name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DraggableList;
