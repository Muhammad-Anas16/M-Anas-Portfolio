import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFire,
  FaCloud,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsData = [
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "HTML5 / CSS3", icon: FaHtml5, color: "text-orange-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "REST APIs", icon: TbApi, color: "text-purple-400" },
  { name: "Firebase", icon: FaFire, color: "text-yellow-500" },
  { name: "Git / Github", icon: FaGitAlt, color: "text-orange-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "Cloud Hosting", icon: FaCloud, color: "text-blue-400" },
];

const Skill = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 ">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-white">My Skills</h1>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="border  backdrop-blur-[10px] rounded-md p-6 flex flex-col items-center justify-center gap-4 transition-shadow duration-300 group cursor-pointer hover:shadow-[0_0_50px_rgba(0,245,255,0.5)]"
          >
            <skill.icon
              className={`text-2xl ${skill.color} text-[#b9caca] transition-colors`}
            />
            {/* <span className="text-lg font-medium text-white">{skill.name}</span> */}
            <span className="font-label text-sm font-medium text-[#e5e2e1]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
