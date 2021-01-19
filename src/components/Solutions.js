import React from "react";
import Virtual from "./Virtual";
import Clinical from "./Clinical";
import Self from "./Self";

const Solutions = () => {
  return (
    <>
      <div className="container">
        <Virtual />
        <Self />
        <Clinical />
      </div>
    </>
  );
};

export default Solutions;
