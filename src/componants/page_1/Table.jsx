import React from "react";

const Table = () => {
  const data = [
    {
      first: "Fully Loaded",
      second:
        "From complex strategies to intricate identities to bleeding-edge digital development, every project is now possible with a click.",
    },
    {
      first: "Flat Fee Flex",
      second:
        "We don't haggle over hours. Our plans are nimble and allow plenty of wiggle room to account for shifting priorities and rethinking.   ",
    },
    {
      first: "Creative Control",
      second:
        "We don't want our clients to ever feel trapped or locked into anything. If you want to pump the brakes or step on the gas, feel free to pause, cancel, or upgrade anytime. ",
    },
  ];
  return (
    <div>
      <div className="w-full h-screen sm:h-screen text-white grid sm:grid-cols-12  px-[2vw] sm:px-0">
        <div className="sm:col-span-6 col-span-6 sm:p-[1vw] sm:text-[1.3vw] text-[5vw] uppercase order-1">
          ● Creative as it should be
        </div>
        <div className="sm:col-span-2 col-span-6 sm:order-3 order-2 sm:flex justify-end sm:px-[1vw] sm:text-[1.3vw] text-[5vw]">
          (BO® — 01)
        </div>

        <div className="sm:col-span-4 col-span-5 items-start order-3 sm:order-2">
          {data.map((item, index) => {
            return (
              <div
                className={`
                  place-items-start sm:px-[3vw] capitalize sm:w-[90%]
                   ${
                  index == 0 ? "sm:p-0" : "sm:py-[3vw]"
                }`
              }
              >
                <h4 className="text-[5.5vw] sm:text-[1.4vw] sm:mt-0 mt-[10vw] capitalize">
                  {item.first}
                </h4>
                <p className="mt-[5vw] sm:mt-[2vw] text-[5vw] sm:text-[1.3vw] leading-none text-zinc-500">
                  {item.second}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
