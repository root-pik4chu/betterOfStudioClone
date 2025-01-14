import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample data for options
const options = [
  {
    name: "Option A",
    photo:
      "https://www.datocms-assets.com/106915/1717982440-relevant-compliance_logo.png?auto=format%2Ccompress&fit=max&h=500&w=500",
    description: "This is the description for Option A.",
    info: "Referred by a friend, we appreciated this team's clear pricing and flexible staffing for our major site launches, including Shopify development. They're now our go-to team in a pinch.",
  },
  {
    name: "Option B",
    photo:
      "https://www.datocms-assets.com/106915/1717982764-hoco_logo.png?auto=format%2Ccompress&fit=max&h=500&w=500",
    description: "This is the description for Option B.",
    info: "This team excelled under pressure, delivering a standout UX/UI update to our booking section that redefined our collaboration and became a highlight for Royal Caribbean.",
  },
  {
    name: "Option C",
    photo:
      "https://www.datocms-assets.com/106915/1717982464-royal-caribbean_logo.png?auto=format%2Ccompress&fit=max&h=500&w=500",
    description: "This is the description for Option C.",
    info: "We've partnered with Better Off for years, and are always impressed by their innovative brand development and precise execution. Their work during our recent rebrand matched our vision perfectly.",
  },
  {
    name: "Option D",
    photo:
      "https://www.datocms-assets.com/106915/1717858815-built_logo.png?auto=format%2Ccompress&fit=max&h=500&w=500",
    description: "This is the description for Option D.",
    info: "We have a long history with this company  and several major projects together. Their expertise consistently makes us look good.",
  },
  {
    name: "Option E",
    photo:
      "https://www.datocms-assets.com/106915/1717983726-spacecraft_logo.png?auto=format%2Ccompress&fit=max&h=500&w=500",
    description: "This is the description for Option E.",
    info: " We involve this team in every new product. They excel at their work and care about every detail, making each project special and unique.",
  },
];

const OriginalDragSystemWithInfo = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to the first option

  const handleClick = (option) => {
    setSelectedOption(option); // Update selected option on click
  };


  

  return (
    <div>
      <div className="w-full h-[120vh] ">
      <div className="w-full h-full grid grid-rows-[10vh,70vh,30vh] grid-cols-1 bg-zinc-900 text-white" >
        <div className="w-full h-full"></div>

        <div className="grid-cols-2 w-[100%] sm:w-[70%] sm:ml-[30%] h-full">
          <div className="p-4  rounded-lg ">
            <p className="h-[40vh] text-[9vw] sm:text-[3.5vw] leading-none font-medium">
              {/* "We involve this team in */}
              {selectedOption.info}
            </p>
          </div>
          <div className="w-full mt-[20vw] sm:mt-[0] h-[15%] sm:h-[20%]   flex items-center justify-center gap-[5vw] sm:gap-[0vw] ">
            <div className="w-[20%] rounded-full ">
              <div className="w-[20vw] sm:w-[8vw] h-[20vw] sm:h-[8vw]  flex items-center justify-center">
                <img className="w-[60%]" src={selectedOption.photo} alt="" />
              </div>
            </div>
            <div className="w-[80%]">
              <div className="name text-[6vw] sm:text-[2vw] leading-none font-medium ">
                <h1>its my name</h1>
              </div>
              <div className="otherinfo text-[4vw] sm:text-[1vw] leading-none font-medium">
                <h1>another information</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" overflow-hidden w-full h-1/2 sm:h-full flex justify-start sm:items-center items-end  ">
          <motion.div
            className="flex items-end cursor-grab sm:cursor-pointer"
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="min-w-[50vw] sm:min-w-[10%] border border-opacity-25 border-zinc-100 box-border flex justify-center items-center"
                onClick={() => handleClick(option)}
              >
               
                <img
                  src={option.photo}
                  alt={option.name}
                  className="w-[50%] h-auto rounded-md p-[2.5vw]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OriginalDragSystemWithInfo;
