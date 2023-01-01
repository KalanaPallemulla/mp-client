import React from "react";
import Navbar from "../Navbar";

const Container = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default Container;
