import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../utils/linkUtils";
import { FcBusinessman } from "react-icons/fc";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [login] = useState(false);

  const isLocation = (path) => path === location.pathname;
  return (
    <div className="bg-white fixed top-0 z-40 w-screen md:px-20">
      <div className="h-16 flex items-center justify-between">
        <img
          className="h-8 w-8 ml-8"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <div className="mr-8 space-x-8 flex flex-row justify-center items-center">
          <div className=" hidden md:block space-x-4">
            {navLinks.map((link, index) => (
              <Link
                className={
                  isLocation(link.nav)
                    ? "font-mulish text-orange-600 text-sm"
                    : "font-mulish text-gray-500 text-sm"
                }
                key={index}
                to={link.nav}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {login ? (
            <div className="bg-orange-400 h-6 w-6 flex rounded-full justify-center items-center">
              <FcBusinessman />
            </div>
          ) : (
            <div className="font-pacifico text-orange-600 text-sm">join</div>
          )}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.nav}
                  className={
                    isLocation(link.nav)
                      ? "  text-orange-600 block px-3 py-2 rounded-md text-base font-mulish"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-mulish"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;
