import React, { Fragment, useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Transition } from "@headlessui/react";

const Proposals = () => {
  const firstText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const secondText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Header
        topText="Let's discover.."
        middleText="We provide you so many proposals..."
      />
      <div
        className="md:grid md:grid-cols-12 mt-8"
        // onClick={() => setShow(false)}
      >
        <div className="md:col-span-12">
          <div className="md:grid md:grid-cols-3 ">
            <div className="py-4  lg:px-6">
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

        <div
          className={`fixed right-0 top-16 transparent ease-in-out duration-300 ${
            show
              ? "w-64 backdrop-blur-3xl bg-orange-200 rounded-tl-xl h-screen px-4 py-8 "
              : "w-16  opacity-60 h-screen flex justify-center items-center -mt-16"
          } `}
        >
          {show ? (
            <Transition show={show} enter="transition-opacity duration-75">
              <h1
                className="text-orange-600 text-2xl"
                onClick={() => setShow(false)}
              >
                <BsChevronDoubleRight color="#ea580c" />
              </h1>
            </Transition>
          ) : (
            <h1
              onClick={() => setShow(true)}
              className="text-orange-600 text-2xl w-16 h-16 flex justify-center items-center "
            >
              <BsChevronDoubleLeft color="#ea580c" />
            </h1>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Proposals;
