import React from "react";
import { MessageSquareText, Link2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-6 py-32 md:flex-row flex-col items-center">
        <div className="flex md:w-1/2 lg:pr-24 md:pr-16 flex-col gap-4 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-col items-baseline">
            <h1 className="font-bold">
              <span className="text-5xl md:text-6xl font-extrabold">
                Muhammad
              </span>
              <br />
              <span className="text-5xl md:text-6xl font-extrabold text-[#22D3EE]">
                Anas
              </span>
            </h1>
            <p className="text-2xl font-bold text-white">
              MERN Stack Developer
            </p>
          </div>
          <div className="flex justify-center gap-2">
            {/* <button className="inline-flex text-black  bg-[#22D3EE] border-0 px-6 focus:outline-none hover:bg-[#0c95aa] rounded-full text-xs items-center gap-2 font-semibold cursor-pointer">
              View Projects
            </button> */}

            <button className="inline-flex text-black  bg-[#22D3EE] border-0 px-6 py-2 focus:outline-none hover:bg-[#0c95aa] rounded-full text-xs items-center gap-2 font-semibold cursor-pointer">
              <MessageSquareText className="w-4 h-4" />
              WhatsApp
            </button>

            {/* <button className="inline-flex text-[#22D3EE] border-1 px-6 focus:outline-none hover:bg-white/10 rounded-full text-xs items-center gap-2 font-semibold cursor-pointer">
              <MessageSquareText className="w-4 h-4" />
              WhatsApp
            </button> */}

            <button className="inline-flex text-[#22D3EE] border px-6 py-2 focus:outline-none hover:bg-white/10 rounded-full text-xs items-center gap-2 font-semibold cursor-pointer">
              <Link2 className="w-4 h-4" />
              LinkedIn
            </button>

            {/* <button className="inline-flex bg-transparent text-[#22D3EE] border-0 py-2 px-6 hover:text-[#0c95aa] text-xs items-center gap-2 font-semibold cursor-pointer">
              <Link2 className="w-4 h-4" />
              LinkedIn
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
