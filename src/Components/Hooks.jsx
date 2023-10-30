import "./Style/Menu.css";
import State from "./HooksDir/State";
import Effect from "./HooksDir/Effect";
import Context from "./HooksDir/Context";
import Callback from "./HooksDir/Callback";
import Memo from "./HooksDir/Memo";
import Reducer from "./HooksDir/Reducer";
import Ref from "./HooksDir/Ref";
import { useState } from "react";

import Slider from "./Slider";

const Hooks = () => {
  return (
    <div className="info">
      <div className="heading">Hooks</div>
      <State />
      <Effect />
      <Context />
      <Callback />
      <Memo />
      <Reducer />
      <Ref />
    </div>
  );
};

export default Hooks;
