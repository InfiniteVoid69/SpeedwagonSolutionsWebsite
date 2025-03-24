import { useState } from "react";
import { navItems } from "./resources";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="new-container w-full">
      <div className="px-3 md:px-4">
        <div className="py-5 px-[7%]  text-gray-300">
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
                    <a className="hover:text-text-primary" href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact + Mobile Toggle */}
            <div className="flex flex-1 justify-end gap-2 items-center">
              <div className="flex items-center lg:w-auto lg:flex-row lg:gap-2">
                <a href="#" className="inline mr-2">
                  <button>Contact</button>
                </a>
              </div>
              <button
                onClick={() => {
                  console.log("button clicked");
                  setIsOpen(!isOpen);
                }}
                className="flex overflow-x-hidden lg:hidden items-center w-8 justify-center"
                aria-label="Toggle menu"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="7.5"
                    width="14"
                    height="1"
                    rx="0.5"
                    className="origin-center transition-transform duration-200 ease-out translate-y-[-3.5px]"
                  ></rect>
                  <rect
                    x="1"
                    y="7.5"
                    width="14"
                    height="1"
                    rx="0.5"
                    className="origin-center transition-transform duration-200 ease-out translate-y-[3.5px]"
                  ></rect>
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
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
