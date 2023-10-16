import "./Style/topicPage.css";
import { useState } from "react";
const Image = ({ pics }) => {
  const [bool, setBool] = useState(true);
  return (
    <div className="sizeImage">
      {bool === true && (
        <img src={pics[0]} onClick={() => setBool(false)} alt="Pics 0" />
      )}
      {bool === false && (
        <img src={pics[1]} onClick={() => setBool(true)} alt="Pics 1" />
      )}
    </div>
  );
};

export default Image;
