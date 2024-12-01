import { motion } from "framer-motion";
import React from "react";

const TextDivision = () => {
  return (
    <div className="biger_one sm:h-[60vh] h-[90vh] sm:w-[65vw] w-full px-4 sm:text-[3.2vw] text-[9vw] flex flex-col leading-none">
      <div className="first hidden sm:block w-full h-full sm:h-full sm:w-full">
        {/* 
        
        */}
        <div className="one overflow-hidden">
          {
          ["No more inflated agency fees. No more flaky","freelancers. No more salaried employees to","manage. Just top-tier creative that’s easy,","Get transformational talent and capabilities","in a turnkey platform that promises your","brand will be Better Off®."].map((item, index)=>{
            return(
              <p className="overflow-hidden">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1}}
                viewport={{once:true}}
                className="inline-block"
              >
                {item}

              </motion.span>
              </p>
            )

          })
          
          }
        </div>

        {/* <div className="one">
          <p>freelancers. No more salaried employees to</p>
        </div>
        <div className="one">
          <p>manage. Just top-tier creative that’s easy,</p>
        </div>
        <div className="one">
          <p>high velocity, and sensibly priced.</p>
        </div>
        <br />
        <div className="one">
          <p>Get transformational talent and capabilities</p>
        </div>
        <div className="one">
          <p>in a turnkey platform that promises your</p>
        </div>
        <div className="one">
          <p>brand will be Better Off®.</p>
        </div> */}
      </div>
      <div className="block sm:hidden w-full h-full">
        <div className="one">
          <p>No more inflated</p>
        </div>
        <div className="one">
          <p>agency fees. No more</p>
        </div>
        <div className="one">
          <p>flaky freelancers. No</p>
        </div>
        <div className="one">
          <p>more salaried</p>
        </div>
        <div className="one">
          <p>employees to manage.</p>
        </div>
        <div className="one">
          <p>Just top-tier creative</p>
        </div>
        <div className="one">
          <p>that’s easy, high</p>
        </div>
        <div className="one">
          <p>velocity, and sensibly</p>
        </div>
        <div className="one">
          <p>priced.</p>
        </div>
        {/* <div className="one"><p>employees to manage.</p></div> */}
        <br />
        <div className="one">
          <p>Get transformational</p>
        </div>
        <div className="one">
          <p>talent and capabilities in</p>
        </div>
        <div className="one">
          <p>a turnkey platform that</p>
        </div>
        <div className="one">
          <p>promises your brand</p>
        </div>
        <div className="one">
          <p>will be Better Off®.</p>
        </div>
      </div>
    </div>
  );
};

export default TextDivision;
