import { useState } from "react";
import { navItems } from "./resources";
import { Button } from "./buttons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="new-container w-full">
      <div className="px-3 md:px-4">
        <div className="py-5 px-[7%]  text-text-primary/85">
          <nav className="flex w-full items-center">

            {/* Left: Logo */}
            <div className="flex flex-1 items-center gap-6">
              <div className="block items-center w-full">
                <a className="text-text-primary font-bold" href="/">
                  Speedwagon Solutions
                </a>
              </div>
            </div>

            {/* Center: Nav Links for Desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div></div>
              <ul className="flex gap-12">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className="px-4 py-1.5 rounded-md transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Mobile Toggle */}
            <div className="flex flex-1 justify-end gap-2 items-center">
              <Button
                size="small"
                buttonType="primary"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Contact
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center w-8 h-8 z-50 lg:hidden"
                aria-label="Toggle menu"
              >
                <span
                  className={`h-0.5 w-6 my-0.5 bg-white transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-6 my-0.5 bg-white transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-6 my-0.5 bg-white transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 z-40 w-full h-[calc(100vh)] bg-[#000] text-white flex justify-center transition-all duration-300">
              <ul className="flex flex-col items-center gap-6 text-xl font-medium mt-12">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block px-6 py-2 rounded-md transition-colors duration-200 hover:bg-white/10"
                    >
                      <span>{item.name}</span>
                      {/* {item.submenu && <span className="text-gray-400">▾</span>} */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
