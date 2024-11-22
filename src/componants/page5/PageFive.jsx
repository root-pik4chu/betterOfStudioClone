import React from "react";

const PageFive = () => {
  const data = [
    {
      headLine: "Your deadlines are our lifeblood",
      des: "Go ahead, flood us with project requests. Our convenient subscriptions offer retainer-level coverage at fixed, affordable monthly rates.",
    },
    {
      headLine: "Tap previously unattainable talent",
      des: "We’ve already vetted and assembled the most elite roster of specialists out there. Simply plug into our power outlet to crank up your brand.",
    },
    {
      headLine: "Cancel culture",
      des: "Scale on your terms and assume complete control over your creative needs by cancelling or upgrading your plan anytime.",
    },
    {
      headLine: "Endless revisions are the ultimate flex",
      des: "Free yourself from restrictive change order fees! We are committed to polishing your project until you think it’s shiny and perfect.",
    },
    {
      headLine: "Fast turnarounds, not idle runarounds",
      des: "By trimming fat from the bloated agency process, we’re able to meet deadlines at turn rates that average days not weeks.",
    },
    {
      headLine: "Our thinking sets us apart",
      des: "Every partnership comes with the strategic brainpower you’d expect from three decades of combined branding experience.",
    },
  ];
  // sm:h-[360vh] h-[280vh]
  return (
    <>
      <div className="w-full h-full bg-zinc-100 grid sm:grid-cols-3 sm:grid-rows-6  leading-none text-zinc-900">
        <div className="font-[ff] sm:col-span-3 sm:row-span-3 sm:flex items-center justify-center flex-col">
          <div className="w-full sm:h-full ">
            <div className="w-full h-[10vh] "></div>
            <div className="one sm:text-[32vw] text-[30vw]">
              <h1 className="text-center sm:mt-[-3vw]">CREATIVE</h1>
            </div>
          </div>
          <div className="w-full sm:h-full  sm:mt-[-13vw] -mt-[7vw] pl-[5vw] sm:pl-[0]">
            <div className="one sm:w-full sm:h-full text-[30vw] flex items-center sm:p-[2.5vw]">
              <h1 >WITH</h1>
              <div className="sm:w-[30%] sm:h-[50%] w-[30%] mt-[3vw]">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.datocms-assets.com/106915/1717685582-betteroffstudio_culture-loop_10.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full sm:h-full sm:mt-[-15vw] -mt-[7vw] pl-[5vw] sm:pl-[0]">
            <div className="one w-full h-full sm:flex justify-end sm:p-[2.2vw] sm:text-[30vw] text-[30vw]">
              <h1>NO FLUFF</h1>
            </div>
          </div>
          
        </div>

        <div className=" sm:row-span-4 sm:col-span-1 p-[4vw] sm:p-0 h-[2vh] sm:h-0">
          <h3 className="sm:w-[60%] sm:h-[25vh]  sm:text-[1.5vw] text-[4.5vw] sm:pt-[5vw] sm:pl-[2.5vw]">
            We've trimmed the fat to focus on essential services at skinny
            rates.
          </h3>
        </div>

        {data.map((item, index) => {
          return (
            <div className="col-span-1 row-span-1 flex items-start justify-start sm:p-[1vw] flex-col sm:gap-[2vw] gap-[5vw] sm:pt-[5vw] p-[3vw]">
              <div className="number sm:text-[1.5vw] text-[5vw]">(0{index + 1})</div>
              <div className="line w-full h-[1px] bg-zinc-400"></div>
              <div className="text w-full sm:h-[30vh] sm:text-[1.5vw] text-[5vw]">
                <h3>{item.headLine}</h3>
                <br />
                <h3 className="text-zinc-500">{item.des}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PageFive;
