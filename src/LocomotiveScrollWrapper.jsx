import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Reference to the container
      smooth: true,
      lerp: 0.07, // Adjust for smoothness; lower values = slower
      multiplier: 0.5, // Slow down the scrolling speed
    });

    return () => {
      // Clean up Locomotive Scroll on unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;