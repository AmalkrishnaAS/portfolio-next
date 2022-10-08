import React from "react";
import Title from "./Title";

import SkillBar from "./SkillBar";
import {
  // FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaGit,
  FaSass
  
 
} from "react-icons/fa";

import { SiTailwind, SiExpress, SiMysql, SiFlask,SiCplusplus,SiFirebase,SiTensorflow,SiJava,SiPhp,SiStrapi,SiLinux } from "react-icons/si";
import {TbBrandTailwind, TbBrandNextjs} from "react-icons/tb";


const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: (
        <FaReact
        
          
        />
      ),
      level: "80%",
    },
    {
        name: "Next.js",
        icon: (
          <TbBrandNextjs />)
    },
    {
      name: "Tailwind CSS",
      icon: (
       <TbBrandTailwind />
      ),
      level: "75%",
    },

    {
      name: "Python",
      icon: (
        <FaPython
        
          
        />
      ),
      level: "60%",
    },
    {
      name: "Tensorflow",
      icon: (
        <SiTensorflow />)

    },
    {
      name: "C/C++",
      icon: (
       <SiCplusplus />
      ),
      level: "90%",
    },
    {
      name: "NodeJS",
      icon: (
        <FaNodeJs
        
          
        />
      ),
      level: "60%",
    },
    {
      name: "Express",
      icon: (
        <SiExpress
        
          
        />
      ),

      level: "50%",
    },

    {
      name: "MySQL",
      icon: (
        <SiMysql
        
          
        />
      ),

      level: "60%",
    },
    {
      name: "Flask",
      icon: (
        <SiFlask
        
          
        />
      ),
      level: "60%",
    },
    {
      name: "Firebase",
      icon: (
        <SiFirebase />)
    },
    {
      name: "Strapi",
      icon: (
        <SiStrapi />)
    },
    {
      name: "Java",
      icon: (
        <SiJava />)
    },
    {
      name: "PHP",
      icon: (
        <SiPhp />)
    },
    {
      name: "HTML",
      icon: (
        <FaHtml5 />)
    },
    {
      name: "CSS",
      icon: (
        <FaCss3 />)
    },
    {
      name:"Sass",
      icon: (
        <FaSass />)
    },
    {
      name: "JavaScript",
      icon: (
        <FaJs />)
    },
    {
      name: "Git",
      icon: (
        <FaGit />)
    },
    {
      name: "Linux",
      icon: (
        <SiLinux />)
    }
  ];

  //sort skills by level

  return (
    <div className="w-full space-y-3 p-8 ">
      <Title text="Skills"></Title>
      <div>
        <div className="flex mt-12 flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => {
            return (
              <SkillBar
                key={index}
                name={skill.name}
                Icon={skill.icon}
                level={skill.level}
              >
                {skill.icon}
              </SkillBar>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
