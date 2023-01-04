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
import Header from "../../components/Header";

const Home = () => {
  const firstText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const secondText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  return (
    <Container>
      <Header
        topText="Welcome to Proposal Paradise"
        middleText="Let's find someone for you.."
        search={true}
      />

      <div className="md:grid md:grid-cols-3 sm:grid-cols-4 mt-8">
        <div className="md:col-span-2 sm:col-span-3  ">
          <div className="sm:grid sm:grid-cols-2 ">
            <div className="py-4 lg:px-6">
              <Card text={firstText} />
            </div>
            <div className="py-4 lg:px-6">
              <Card text={secondText} />
            </div>
            <div className="py-4 lg:px-6">
              <Card text={secondText} />
            </div>
            <div className="py-4 lg:px-6">
              <Card text={firstText} />
            </div>
          </div>
        </div>
        <div className="hidden md:block sm:block lg:p-20 fixed right-0 w-1/3 sm:-mt-20 ">
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
