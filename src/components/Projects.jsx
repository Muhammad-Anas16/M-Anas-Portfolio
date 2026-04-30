import React from "react";
import { IoMdCode } from "react-icons/io";
import { HiOutlineClock, HiCheckCircle } from "react-icons/hi";

const Projects = () => {
  const projectData = [
    {
      title: "Bela-Luna",
      image: "/BelaLuna.png",
      progress: 100,
      problem:
        "Restaurent React Landing Page with responsive, mobile-friendly format.",
      learned:
        "Deepened understanding of Grid layouts, Chart.js integration, and state management in React.",
      tech: ["React JS", "React Bits"],
      live: "https://bela-luna.vercel.app/",
      github: "https://github.com/Muhammad-Anas16/Bela-Luna",
    },
    {
      title: "modern-store-react",
      image: "/ModernStore.png",
      progress: 100,
      problem:
        "A modern responsive e-commerce frontend that efficiently handles product data, API and maintain performance and clean UI.",
      learned:
        "Learned server-state management using TanStack Query, including caching strategies, background refetching, and API performance optimization.",
      tech: [
        "React JS",
        "TanStack Query",
        "REST API",
        "Tailwind CSS",
        "Vercel",
      ],
      live: "https://modern-store-react.vercel.app/",
      github: "https://github.com/Muhammad-Anas16/modern-store-react",
    },
    {
      title: "TaskFlow Projects menagment system",
      image: "/AnalyticDashboard.png",
      progress: 100,
      problem:
        "Users needed a way to visualize complex data sets in a responsive, mobile-friendly format.",
      learned:
        "Deepened understanding of Grid layouts, Chart.js integration, and state management in React.",
      tech: ["Next JS", "ReduxTool Kit", "CSS Grid"],
      live: "https://task-flow-neon-psi.vercel.app/",
      github:
        "https://github.com/Muhammad-Anas16/TaskFlow-SaaS-Project-Management-Dashboard",
    },
    {
      title: "Secure Auth System",
      image: "/secureAuth.png",
      progress: 100,
      problem:
        "Building a reusable authentication module with advanced security and session handling.",
      learned:
        "Implementing refresh tokens, role-based access, and edge middleware in Next.js.",
      tech: ["Next.js", "MongoDB", "Better-Auth"],
      live: "https://secure-auth-self.vercel.app/",
      github: "https://github.com/Muhammad-Anas16/secure-auth",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 ">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-white">My Projects</h1>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col h-full bg-card-gradient border rounded-3xl overflow-hidden transition-all group"border-[#22D3EE]/30"`}
            >
              <div className="relative h-48 w-full bg-[#0a1214] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 opacity-70 group-hover:scale-105 group-hover:opacity-100`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112022] to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  {/* <h4 className="text-[#22D3EE] text-xs font-bold uppercase tracking-wider mb-1">
                    Goal
                  </h4> */}
                  <p className="text-slate-300 text-sm">{project.problem}</p>
                </div>

                {/* <div>
                  <h4 className="text-[#22D3EE] text-xs font-bold uppercase tracking-wider mb-1">
                    What I learned
                  </h4>
                  <p className="text-slate-300 text-sm">{project.learned}</p>
                </div> */}

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/5 text-slate-400 px-2 py-1 rounded cursor-pointer transition-colors hover:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className={`text-xs font-bold px-3 py-2 rounded-lg transition-colors bg-[#1FC5DE]/20 hover:bg-[#1FC5DE]/30 text-white flex items-center gap-1`}
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      className="text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <IoMdCode className="text-[14px]" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
