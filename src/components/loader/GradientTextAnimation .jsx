import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const textArray = [
  "TEXT EFFECT",
  "FRAMER MOTION",
  "CRAZYYY",
  "HOVER ON ME",
  "CUSTOM STAGGER",
];

const GradientText = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div style={{ height: "150vh", backgroundColor: "#0D0D0D", padding: "10%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        {textArray.map((text, i) => {
          // Stagger effect for each text
          const delay = i * 0.1; // Stagger delay
          const backgroundSize = useTransform(
            scrollYProgress,
            [delay, delay + 1],
            ["0% 100%", "100% 100%"]
          );

          return (
            <motion.h1
              key={i}
              className="text"
              style={{
                fontSize: "5vw",
                letterSpacing: "-.01em",
                lineHeight: "100%",
                margin: "0",
                width: "100%",
                color: "rgba(182, 182, 182, 0.2)",
                background: "linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                borderBottom: "1px solid #2F2B28",
                position: "relative",
                backgroundSize,
              }}
            >
              {text}
            </motion.h1>


          );
        })}
      </div>
    </div>
  );
};

export default GradientText;
