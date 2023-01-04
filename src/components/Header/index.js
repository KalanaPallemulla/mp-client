import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Header = ({ topText, middleText, search = false }) => {
  return (
    <div className="w-full flex md:justify-around flex-col md:flex-row">
      <div>
        <h1 className="font-pacifico md:text-4xl text-2xl text-orange-600">
          {topText}
        </h1>
        <div className="flex md:flex-row flex-col md:space-x-4">
          <h1 className="font-inspiration text-lg text-gray-300 text-center md:text-start racking-wide ">
            {middleText}
          </h1>
          <div className="flex flex-row space-x-3 justify-center">
            <Link
              to="/"
              className="h-8 w-8 border border-green-400 rounded-full flex justify-center items-center"
            >
              <AiFillFacebook className="text-green-400" />
            </Link>
            <Link
              to="/"
              className="h-8 w-8 border border-green-400 rounded-full flex justify-center items-center"
            >
              <AiFillInstagram className="text-green-400" />
            </Link>
            <Link
              to="/"
              className="h-8 w-8 border border-green-400 rounded-full flex justify-center items-center"
            >
              <AiFillTwitterCircle className="text-green-400" />
            </Link>
          </div>
        </div>
      </div>
      {search && (
        <div className="flex space-x-4">
          <input
            className="mt-4 md:mt-0 md:w-96 w-full px-4 py-4 rounded-full border border-orange-500 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block   focus:ring-1  placeholder:font-pacifico font-pacifico placeholder:text-xl text-xl  checked:animate-none text-gray-500"
            placeholder="Search"
          />
          <button className="px-6 py-4 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white font-pacifico  text-xl animate-pulse hover:animate-none">
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
