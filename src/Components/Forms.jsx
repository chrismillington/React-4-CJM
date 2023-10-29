import "./Style/Menu.css";
import React, { useState } from "react";
import Slider from "./Slider";

const Forms = () => {
  const [output, setOutput] = useState("Output");
  return (
    <div className="info">
      <div className="heading">Forms</div>
      <p class="output">{output}</p>
      <Slider
        pics={[
          "basicInput.JPG",
          "numberInput.JPG",
          "dateInput.JPG",
          "textAreaInput.JPG",
          "dropDownInput.JPG",
        ]}
        label="Input Code"
      />
      <form action="post">
        <p>
          Basic input - Takes text
          <input
            type="text"
            placeholder="Basic Input"
            onChange={(e) => setOutput(e.target.value)}
          />
        </p>

        <p>
          Number input
          <input
            type="number"
            placeholder="Numbers only"
            onChange={(e) => setOutput(e.target.value)}
          />
        </p>

        <p>
          Whats the date ?
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => setOutput(e.target.value)}
          />
        </p>

        <p>
          <textarea
            placeholder="Text Area- for the man who thinks that little bit bigger"
            onChange={(e) => setOutput(e.target.value)}
          />
        </p>

        <label>
          Pick a fruit:
          <select onChange={(e) => setOutput(e.target.value)}>
            <option value="apple">Apple</option>
            <option value="banana" selected>
              Banana
            </option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
};

export default Forms;
