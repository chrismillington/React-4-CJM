import "./Style/topicPage.css";
import { useState } from "react";

const Slider = ({ pics }) => {
  const [bravo, setBravo] = useState(0);
  return (
    <div className="slideImage">
      <img
        src={pics[bravo]}
        onClick={() =>
          bravo === pics.length - 1 ? setBravo(0) : setBravo(bravo + 1)
        }
        alt="Sliding Image, Click to advance"
      />
      ;
    </div>
  );
};

export default Slider;
