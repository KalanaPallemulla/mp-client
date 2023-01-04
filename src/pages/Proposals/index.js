import React, { Fragment, useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { RadioGroup } from "@headlessui/react";

const plans = [
  { id: 1, name: "Bride" },
  { id: 2, name: "Groom" },
];

const ages = [
  { id: 1, name: "18 to 24" },
  { id: 2, name: "24 to 28 " },
  { id: 3, name: "28 to 36" },
  { id: 4, name: "36 to 44" },
  { id: 5, name: "44" },
];
const Proposals = () => {
  const firstText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const secondText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Header
        topText="Let's discover.."
        middleText="We provide you so many proposals..."
        search={true}
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
            <>
              <h1
                className="text-orange-600 text-2xl"
                onClick={() => setShow(false)}
              >
                <BsChevronDoubleRight color="#ea580c" />
              </h1>
              <div className="flex flex-col">
                <div className="mt-6">
                  <h1 className="font-mulish text-lg text-orange-600 opacity-80">
                    Looking for
                  </h1>
                  <RadioGroup>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="space-y-2 mt-2">
                      {plans.map((plan) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-300"
                                : ""
                            }
                  ${
                    checked
                      ? "bg-orange-600 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-yanone font-bold  ${
                                        checked
                                          ? "text-white"
                                          : "text-orange-900"
                                      }`}
                                    >
                                      {plan.name}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-6">
                  <h1 className="font-mulish text-lg text-orange-600 opacity-80">
                    Age
                  </h1>
                  <RadioGroup>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="space-y-2 mt-2">
                      {ages.map((plan) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-300"
                                : ""
                            }
                  ${
                    checked
                      ? "bg-orange-600 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-yanone font-bold  ${
                                        checked
                                          ? "text-white"
                                          : "text-orange-900"
                                      }`}
                                    >
                                      {plan.name}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex justify-center items-center mt-6">
                  <button
                    onClick={() => setShow(false)}
                    className="px-8 py-2 bg-white rounded-lg hover:bg-orange-600 hover:text-white text-orange-600 font-satisfy font-bold shadow-lg "
                  >
                    Done
                  </button>
                </div>
              </div>
            </>
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
