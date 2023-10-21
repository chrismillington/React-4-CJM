import "./Style/topicPage.css";
import Slider from "./Slider";
const Components = () => {
  return (
    <div className="info">
      <div className="heading">Components</div>
      <p>
        Components are the core part of react. All react pages are made using a
        combination of multiple components
      </p>

      <Slider
        pics={["components1.JPG", "components2.JPG", "ComponentsLabelled.JPG"]}
        label="Components in use"
      />

      <p>
        Components all have a main function, a return type and export something
      </p>
      <p>
        React Components have to start with a capital letter, otherwise, chaos
        is caused
      </p>
    </div>
  );
};

export default Components;
