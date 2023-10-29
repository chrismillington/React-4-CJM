import "./Style/topicPage.css";
import { useState } from "react";

const Slider = ({ pics, label }) => {
  const [bravo, setBravo] = useState(0);
  return (
    <div className="slideImage">
      <label>
        <div className="label">
          {label}
          {pics.length > 1 && " - Click to see more"}
        </div>
        <img
          src={pics[bravo]}
          onClick={() =>
            bravo === pics.length - 1 ? setBravo(0) : setBravo(bravo + 1)
          }
          alt={label}
        />
      </label>
      ;
    </div>
  );
};

export default Slider;
