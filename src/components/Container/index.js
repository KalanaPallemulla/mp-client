import React from "react";
import Navbar from "../Navbar";

const Container = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-24 md:px-40 px-8">{children}</div>
    </div>
  );
};

export default Container;
