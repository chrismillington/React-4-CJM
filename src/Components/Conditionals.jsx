import "./Style/topicPage.css";
import Slider from "./Slider";
const Conditionals = () => {
  let val = 1;

  return (
    <div className="info">
      <div className="heading">Conditionals</div>
      <p>
        Conditional are basically if statements. However, usinf if statements
        involves curly brackets which causes mayhem in react. There are 2
        alternatives
      </p>
      <ul>
        <li>
          Ternary opearators - Ternary Operators Simplify an if statement into a
          single line
          <Slider pics={["condition1.png"]} label="Simple ternary operator" />
          {/* A Ternary Operator */}
          <p>Ouput = {val === 1 ? "True" : "False"}</p>
        </li>

        <li>
          And (&&) operators take advantage of a shortcut and let you base
          displaying a variable/component on whether another variable is true
          <Slider pics={["condition2.png"]} label="Simple AND(&&) operator" />
          <p>Output = {val === 1 && "True"}</p>
        </li>
      </ul>
    </div>
  );
};

export default Conditionals;
