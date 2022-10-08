import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  const icons = [
    {
      name: "Facebook",
      icon: (
        <FaFacebook
          className="text-gray-500 hover:text-primary-500 hover:scale-110 transition-all duration-150"
          size={30}
        />
      ),
      link: "https://www.facebook.com/amalkrishna",
    },
    {
      name: "Twitter",
      icon: (
        <FaTwitter
          className="text-gray-500 hover:text-primary-500 hover:scale-110 transition-all duration-150"
          size={30}
        />
      ),
      link: "https://twitter.com/amalkrishna",
    },
    {
      name: "Linkedin",
      icon: (
        <FaLinkedin
          className="text-gray-500 hover:text-primary-500 hover:scale-110 transition-all duration-150"
          size={30}
        />
      ),
      link: "https://www.linkedin.com/in/amalkrishna/",
    },
    {
      name: "Github",
      icon: (
        <FaGithub
          className="text-gray-500 hover:scale-110 hover:text-primary-500 transition-all duration-150"
          size={30}
        />
      ),
      link: "",
    },
  ];
  return (
    <>
      {icons.map((icon) => (
        <a key={icon.name} href={icon.link} className="flex items-center p-3">
          {icon.icon}
        </a>
      ))}
    </>
  );
};

export default Socials;
