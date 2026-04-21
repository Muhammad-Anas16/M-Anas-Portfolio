import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-4 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-col items-baseline justify-center">
            <div className="flex title-font sm:text-4xl text-xl font-medium text-white">
              <span>Muhammad</span>
              <span>Anas</span>
            </div>
            <p className="text-lg">MERN Stack Developer</p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
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
