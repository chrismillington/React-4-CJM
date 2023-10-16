import "./Style/topicPage.css";
import Slider from "./Slider";

const cover = () => {
  return (
    <div className="info">
      <div className="heading">React for CJM</div>
      <p>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on components. It is maintained by Meta
        and a community of individual developers and companies. React can be
        used to develop single-page, mobile, or server-rendered applications
        with frameworks like Next.js.
      </p>
      <label>
        <Slider pics={["React.png", "React-dark.png"]} />
      </label>
    </div>
  );
};

export default cover;
