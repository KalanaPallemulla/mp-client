import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ text }) => {
  return (
    <div className="p-2 border rounded-lg">
      <div
        className="h-60 rounded-lg"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/577616194/photo/can-i-have-the-honor-of-loving-you-forever.jpg?s=612x612&w=0&k=20&c=7R4skg_E1Z7eCwp8wymU7FYiwUarms9z1VZj0wUjh8E=")`,
          backgroundSize: "cover",
        }}
      ></div>
      <h1 className="font-inspiration text-green-600">Verified Account</h1>
      <h1 className="font-pacifico text-gray-500 text-lg">
        Hey, I am John Doe
      </h1>
      <div className="grid grid-cols-12">
        <div className="mt-4 font-mulish text-gray-500 first-letter:text-2xl first-letter:text-orange-600 first-letter:font-bold col-span-10 p-2">
          {text}
        </div>
        <div className="h-full flex flex-col justify-center items-center ml-4 space-y-4">
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
          <Link
            to="/"
            className="h-8 w-8 border border-green-400 rounded-full flex justify-center items-center"
          >
            <AiOutlineLinkedin className="text-green-400" />
          </Link>
        </div>
      </div>
      <div className="text-xs font-pacifico text-orange-400">01 Jan 2023</div>
    </div>
  );
};

export default Card;
