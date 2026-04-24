import React from "react";
import { MdOutlineEco, MdOutlinePublic } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full max-w-4xl py-24 flex flex-col gap-8 px-5">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-white">About Me</h1>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid md:grid-cols-[1fr_auto] gap-8 bg-card-gradient border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            I’m a Full-Stack Developer focused on building simple, clean,
            and functional web applications using modern technologies like{" "}
            <span className="text-white font-semibold">Mongo DB, Express.js, React.js, Node.js</span> and{" "}
            <span className="text-white font-semibold">Next.js</span>.
            <br />
            <br />I value clear communication and am eager to learn. While I may
            not have decades of experience, I make up for it with intense
            curiosity, a modern tech stack, and a drive to solve problems
            efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
