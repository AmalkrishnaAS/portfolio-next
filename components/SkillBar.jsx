import React from "react";

import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

//import tailwind icon

const SkillBar = ({ level, name, icon,children,key }) => {
  const bar_width = level;
 

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10, // value of the bounce
        stiffness: 100, //
      },
    },
  };
  return (
    
    <div className='border-2 bg-[rgba(226,137,82,0.3)] text-orange-300 border-orange-500 px-6 py-2 rounded-3xl w-48 flex justify-center md:w-auto'>
      <div className="flex space-x-4 items-center">
       {children}
      <h6 className='font-mono'>
        {name }
    </h6>
  
      </div>
   
</div>
  );
};

export default SkillBar;
