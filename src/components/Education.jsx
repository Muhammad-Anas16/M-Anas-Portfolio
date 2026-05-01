import React from "react";

const educationData = [
  {
    date: "2020 - 2022",
    title: "Matriculation",
    description:
      "Completed matriculation from The Citizens Foundation focused on science subjects and achieving strong grades in mathematics and physics.",
  },
  {
    date: "2023 - 2024",
    title: "Intermmediate",
    description:
      "Currently pursuing intermediate studies at The Citizens Foundation with a focus on pre-engineering subjects, including advanced mathematics, physics, and computer science.",
  },
  {
    date: "2025 - 2026",
    title: "Modern Wed and App Development Course",
    description:
      "Enrolled in a comprehensive course covering modern web and app development technologies, including HTML, CSS, JavaScript, React, and mobile app development frameworks to enhance practical skills and industry readiness.",
  },
];

const Education = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-white">My Education</h1>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      {/* Timeline */}
      <ol className="relative border-s border-white/20">
        {educationData.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full mt-1.5 -start-1.5 border border-black" />

            {/* Content */}
            <div className="flex flex-col items-start">
              <time className="text-sm text-gray-400">{item.date}</time>

              <h3 className="text-lg font-semibold text-white my-1">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-sm text-gray-400">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
