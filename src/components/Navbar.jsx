import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ FIX: cleaner toggle (no stale state issues)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const MenuList = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    // ✅ FIX: Proper centering using translate
    <nav className="bg-neutral-900/60 fixed left-1/2 -translate-x-1/2 w-[98%] md:w-[95%] z-20 top-0 border-b border-default backdrop-blur-2xl rounded-full mt-4 shadow-[0_0_20px_rgba(0,245,255,0.1)]">
      <div className="flex items-center justify-between mx-auto p-2 px-6">
        {/* Logo */}
        <span className="text-xl uppercase text-heading font-bold text-[#22D3EE] cursor-pointer">
          M-anas.dev
        </span>

        {/* Right Side */}

        <div className="flex flex-row-reverse items-center gap-3">
          <div className="flex items-center gap-3 flex-row-reverse">
            <button
              type="button"
              className="hidden md:inline-block text-black bg-[#00F5FF] rounded-full text-sm px-6 py-2 scale-95 active:scale-90 transition-transform cursor-pointer"
            >
              Resume
            </button>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2 rounded-full" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <GiHamburgerMenu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* ✅ FIX: Mobile dropdown + Desktop inline separation */}
          <div
            className={`
            absolute top-full left-0 w-full
            md:static md:w-auto md:flex
            ${isMenuOpen ? "block" : "hidden"} md:block
          `}
          >
            <ul
              className="
              flex flex-col p-4 mt-4
              border border-default rounded-base
              bg-neutral-900/90
              md:flex-row md:space-x-8 md:mt-0
              md:border-0 md:bg-transparent
            "
            >
              {MenuList.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-heading hover:text-[#22D3EE] md:p-0"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <button
                type="button"
                className="md:hidden text-black bg-[#00F5FF] rounded-full text-sm px-6 py-2 scale-95 active:scale-90 transition-transform"
              >
                Resume
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
