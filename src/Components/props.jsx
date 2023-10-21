import "./Style/topicPage.css";
import Slider from "./Slider";

const props = () => {
  return (
    <div className="info">
      <div className="heading">Props</div>
      <p>
        Props let you pass arguments into components, not too dissimilar to
        parameters
      </p>
      <p>You can pass primitive, or reference types to simplify things :-) </p>
      <Slider pics={["Props1.JPG"]} label="Props Demonstration" />

      <p>The props are then recieved by the component</p>
      <p>
        Props can either be interpretted as props.[prop name] or can be
        disaggregated using &#123; &#125;
      </p>

      <Slider
        pics={["Props1.JPG", "Props2.JPG"]}
        label="Props disaggregated - before and after"
      />
    </div>
  );
};

export default props;
