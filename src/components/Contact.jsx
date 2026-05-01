import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Contact Me</h1>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="flex flex-col items- gap-4 mt-6">
        <h1>open to opportunities.</h1>
        <h4>Feel free to reach out!</h4>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="mailto:Muhammad-Anas-16@outlook.com" target="_blank">
              <button className="w-full sm:w-auto h-12 px-6 rounded-full bg-gray-600/10 border border-gray-400/30 text-white font-bold hover:bg-gray-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <MdOutlineEmail /> Email
              </button>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-anas-16" target="_blank">
              <button className="w-full sm:w-auto h-12 px-6 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-500 font-bold hover:bg-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <CiLinkedin /> LinkedIn
              </button>
            </a>
            <a href="https://wa.me/923182834203" target="_blank">
              <button className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <FaWhatsapp /> WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="https://wa.me/923182834203" target="_blank">
              <button className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <MdOutlineChat /> WhatsApp
              </button>
            </a>
          </div> */
}
