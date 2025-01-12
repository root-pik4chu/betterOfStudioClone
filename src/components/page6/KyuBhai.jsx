import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const KyuBhai = () => {
  const texts = ["Hello World!", "Welcome Back!"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // On initial render, set the first text to be visible
    const initialText = containerRef.current.children[currentIndex];
    gsap.set(initialText, { y: "0%" });
  }, [currentIndex]);

  const handleNext = () => {
    const currentText = containerRef.current.children[currentIndex];
    const nextIndex = (currentIndex + 1) % texts.length;
    const nextText = containerRef.current.children[nextIndex];

    // Animate the current text upward
    gsap.to(currentText, { y: "-100%", duration: 0.5, ease: "power1.inOut" });

    // Animate the next text from the bottom
    gsap.fromTo(
      nextText,
      { y: "100%" },
      { y: "0%", duration: 0.5, ease: "power1.inOut" }
    );

    setCurrentIndex(nextIndex); // Update the index
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        ref={containerRef}
        className="relative w-72 h-24 overflow-hidden border-2 border-gray-700 bg-white"
      >
        {texts.map((text, index) => (
          <div
            key={index}
            style={{ transform: "translateY(100%)" }}
            className="absolute w-full text-center text-xl font-bold"
          >
            {text}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default KyuBhai;

//     ye line loop marne ko ... last work to first one and first to last if two words ...
//   cuuuurent wala text up then nicheewalaa ?
 // ye niche wale ko animate kro mat karo no prob bass niche khich lenaaa .... 
// Update the current index so that we can loop the process