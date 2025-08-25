import React from "react";
import profileImage from "../../assets/hero.jpg"; // তোমার image path
import { FaReact, FaJsSquare, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <FaReact className="text-gray-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  
];

const About = () => {
  return (
    <section id="about" className=" dark:bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 gap-12">
        
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-3xl shadow-2xl w-full max-w-sm object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hi! I'm Mahmud, a passionate frontend developer. I love creating
            modern and responsive web applications with React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I focus on writing clean and maintainable code, building user-friendly
            interfaces, and continuously improving my skills. My goal is to bring
            ideas to life with beautiful and functional web applications.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-300"
              >
                {skill.icon}
                <span className="font-medium text-gray-800 dark:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
