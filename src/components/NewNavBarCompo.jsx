import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(items[0]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md overflow-hidden">
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-200 text-gray-800 font-semibold focus:outline-none"
          >
            {item.title}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === index ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-2"
            >
              ➤
            </motion.span>
          </button>

          {/* Accordion Content */}
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: activeIndex === index ? "auto" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 bg-gray-50 text-gray-600">
              {item.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;


