import "./Style/topicPage.css";
import Slider from "./Slider";

const Lists = () => {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <div className="info">
      <div className="heading">Lists</div>
      <p>Lists in react are defined in the same way as in JS [].</p>
      <ul>
        <li>They can contain objects {}</li>
        <li>They can be iterated over, but not using for or while</li>
        <li>
          To iterate in JSX, you need to use map or filter to loop through them,
          as you can see below
        </li>
        <li>
          When using objects, every item should have a key, or unique value
        </li>
      </ul>
      <Slider
        pics={["Lists1.png", "Lists2.png"]}
        label="The list and map code - Click to proceed"
      />
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <p>
            {car.id} is a {car.brand}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
