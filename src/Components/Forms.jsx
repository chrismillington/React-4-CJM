import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Slider from "./Slider";

import "./Style/forms.css";

const Forms = () => {
  // useRef
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  // Create an object called person
  const person = { name: "", age: 0 };
  // Method to handle event (e)
  const handleSubmitRef = (e) => {
    e.preventDefault();
    person.name = nameRef.current.value;
    person.age = parseInt(ageRef.current.value);
    console.log(person.name + " - " + person.age);
  };
  // useState
  const [bloke, setBloke] = useState({
    name: "",
    age: "",
  });
  const handleSubmitState = (e) => {
    e.preventDefault();
    console.log(bloke.name + " - " + bloke.age);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("Boom, Boom, Pow", data);

  return (
    <div className="info">
      <div className="heading mt-4">Forms</div>
      <div className="outline">
        <p>
          Forms here are made using bootstrap, This allows for cleaner and
          quicker style
        </p>
        <p>Forms can be made with clever use of emmets</p>

        <p>
          There are 2 ways to get data from a form, the ref hook or the state
          hook
        </p>
      </div>

      <form onSubmit={handleSubmitRef}>
        <div className="sub-heading">Ref</div>
        {/* This links back to a seperate method in JS */}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          {/* This Links ref back to the useRef hook above */}
          <input ref={ageRef} type="number" className="form-control" id="age" />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Slider pics={["refForm.JPG", "refForm2.JPG"]} />
      </form>

      <form onSubmit={handleSubmitState}>
        <div className="sub-heading">State</div>
        <p>
          {bloke.name} - {bloke.age}
        </p>
        <p>
          State can also be used to store values, but it will re-render every
          keystroke which is less efficient than useRef in high pressure
          situations
        </p>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            // Every keystroke, you create a new instance of bloke
            onChange={(e) => setBloke({ ...bloke, name: e.target.value })}
            // Here, we link the state to the value, double linking it
            value={bloke.name}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(e) =>
              setBloke({ ...bloke, age: parseInt(e.target.value) })
            }
            value={bloke.age}
            type="number"
            className="form-control"
            id="age"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Slider pics={["stateForm1.JPG", "stateForm2.JPG"]} />
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sub-heading">React-Hook-Form</div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            type="number"
            className="form-control"
            id="age"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Slider pics={["hookForm1.JPG", "hookForm2.JPG"]} />

        <div></div>
      </form>
    </div>
  );
};

export default Forms;
