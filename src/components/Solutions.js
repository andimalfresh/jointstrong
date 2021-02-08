import React from "react";
import Virtual from "./Virtual";
import Clinical from "./Clinical";
import Self from "./Self";

const Solutions = () => {
  return (
    <>
      <div className="container">
        <Self id="self" />
        <Virtual id="virtual" />
        <Clinical id="clinical" />
      </div>
    </>
  );
};

export default Solutions;
