import React from "react";
import { motion } from "framer-motion";

const Title = ({ text }) => {
  return (
    <div className="w-full space-y-3 ">
      <motion.h2
        className=" text-4xl mb-4 font-mono  text-center tracking-wider sm:text-5xl "
        style={{
          color: "transparent",
          backgroundImage: "linear-gradient(to right, orange, red )",

          WebkitBackgroundClip: "text",
          fontWeight: "bold",
        }}
      >{`<${text} />`}</motion.h2>
    </div>
  );
};

export default Title;
