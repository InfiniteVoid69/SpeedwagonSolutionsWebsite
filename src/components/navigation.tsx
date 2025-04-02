import { useState } from "react";
import { navItems } from "./resources";
import { Button } from "./buttons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="new-container w-full">
      <div className="px-3 md:px-4">
        <div className="py-5 px-[7%]  text-text-secondary/85">
          <nav className="flex w-full items-center">
            {/* Left: Logo */}
            <div className="flex flex-1 items-center gap-6">
              <div className="block items-center w-full">
                <a
                  className="text-text-secondary font-bold text-sm sm:text-base whitespace-nowrap" /* Text Should Shrink on all screens :) */
                  href="/"
                >
                  Speedwagon Solutions
                </a>
              </div>
            </div>

            {/* Center: Nav Links for Desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div></div>
              <ul className="flex gap-12">
                {navItems.map((item) => (
                  <li key={item.id} className="relative group">
                    <a
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-md transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      href={item.link}
                    >
                      <div className="flex items-center gap-1 group-hover:text-white">
                        <span>{item.name}</span>
                        {item.sublinks && (
                          <svg
                            className="w-4 h-4 ml-1 transition-transform duration-200 transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>
                    </a>
                    {item.sublinks && (
                      <ul className="absolute top-full left-0 bg-accent1 shadow-lg rounded-md translate-y-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 min-w-[220px] z-50">
                        {item.sublinks.map((sub, i) => (
                          <li key={i}>
                            <a
                              href={sub.link}
                              className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
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
            <div className="lg:hidden absolute top-full left-0 z-40 w-full h-[calc(100vh)] bg-accent1 text-white flex justify-center transition-all duration-300">
              <ul className="w-full flex flex-col items-stretch gap-6 text-xl font-medium mt-12">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block text-center px-10 py-2 rounded-md transition-colors duration-200 hover:bg-white/10"
                    >
                      <span>{item.name}</span>
                    </a>
                    {item.sublinks && (
                      <ul className="mt-2 space-y-2">
                        {item.sublinks.map((sub, i) => (
                          <li key={i}>
                            <a
                              href={sub.link}
                              className="block text-center text-base px-10 py-1 text-white/90 hover:bg-white/10"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
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
