import React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const firstText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const secondText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  return (
    <Container>
      <div className="w-full flex md:justify-around flex-col md:flex-row">
        <div>
          <h1 className="font-pacifico md:text-4xl text-2xl text-orange-600">
            Welcome to Proposal Paradise.
          </h1>
          <div className="flex md:flex-row flex-col md:space-x-4">
            <h1 className="font-inspiration text-lg text-gray-300 text-center md:text-start racking-wide ">
              Let's find someone for you...
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
        <div className="flex space-x-4">
          <input
            className="mt-4 md:mt-0 md:w-96 w-full px-4 py-4 rounded-full border border-orange-500 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block   focus:ring-1  placeholder:font-pacifico font-pacifico placeholder:text-xl text-xl  checked:animate-none text-gray-500"
            placeholder="Search"
          />
          <button className="px-6 py-4 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white font-pacifico  text-xl animate-pulse hover:animate-none">
            Search
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 sm:grid-cols-4 mt-8">
        <div className="md:col-span-2 sm:col-span-3  ">
          <div className="sm:grid sm:grid-cols-2 ">
            <div className="py-4 md:px-12">
              <Card text={firstText} />
            </div>
            <div className="py-4 md:px-12">
              <Card text={secondText} />
            </div>
            <div className="py-4 md:px-12">
              <Card text={secondText} />
            </div>
            <div className="py-4 md:px-12">
              <Card text={firstText} />
            </div>
          </div>
        </div>
        <div className="hidden md:block sm:block p-20 fixed right-0 w-1/3 ">
          <h1 className="font-pacifico text-green-400 text-xl">
            You can post your add here
          </h1>
          <h1 className="mt-8 font-satisfy text-gray-600 text-opacity-60">
            {firstText}
            {firstText}
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Home;
