import React, { useState } from "react";
import Slider from "../Slider";
const State = () => {
  const [state, setState] = useState("Initial Value");

  return (
    <>
      <div className="sub-heading">State</div>;
      <p>State holds data in an auto rendered variable</p>
      <p>
        You declare state using the react library and declaring the variable and
        the setVariable name{" "}
      </p>
      <Slider pics={["State1.JPG", "State2.JPG"]} label="click" />
      <button onClick={(Item) => setState("Updated Value")}>Update</button>
      <div>Current State :{state}</div>
    </>
  );
};

export default State;
