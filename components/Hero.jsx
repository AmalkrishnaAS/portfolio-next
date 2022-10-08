import React from "react";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
motion;

const Hero = () => {
  return (
    <div className="h-screen hero  flex flex-col relative mx-auto" id='home'>
      <div className="flex-1 flex flex-col  items-center justify-center">
        <span className="text-white  mx-auto  text-xl font-light  tracking-wider sm:text-2xl">
          Hello, I'am
        </span>
        <h1 className="   font-fancy mt-3 text-white text-4xl font-light  tracking-wider sm:text-7xl">
          <span className="text-primary-500 font-bold   ">Amal</span>
          <span>Krishna</span>
        </h1>
        <div class="h-[4px] my-4 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <h3 className="uppercase text-white font-mono  text-2xl sm:text-3xl mx-auto">
          <Typewriter
            options={{
              strings: ["programmer", "full stack developer", "tech lover"],
              delay: 100,
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
      {/* socials */}
      <div className="absolute bottom-5 pl-4">
        <Socials></Socials>
      </div>
      {/* down arrow */}
      <motion.div
        className=" flex justify-center p-3 rounded-full"
       
      >
        <ChevronDownIcon
          className="cursor-pointer text-base-500 transition-all duration-150 m-2 h-12 w-12 p-3 bg-gradient-to-r from-orange-300 to-primary-600 rounded-full animate-bounce font-semibold"
          size={30}
          onClick={() => {
            document.querySelector("#about").scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }}
          whileTap={{
            scale: 0.9,
          }}
        />
      </motion.div>

      {/* <div className="fade"></div> */}
    </div>
  );
};

export default Hero;
