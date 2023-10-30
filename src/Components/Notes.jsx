import React from "react";
import NotesTrial from "./NotesTrial";
const Notes = () => {
  return (
    <div className="info">
      <div className="heading">React Notes</div>
      <div className="sub-heading">Purity</div>
      <p>Pure components are those which will always produce the same output</p>
      <div className="sub-heading">Strict Mode </div>
      <p>
        Strict Mode double renders each component. First time to check it works
        and 2nd time to display to users. This is only included in dev runs and
        not anything else .
      </p>
      <div className="sub-heading">Updating Objects</div>
      <p>
        Objects should be updated using the set operator and a spread method
      </p>
      <img src="updateObject.JPG" alt="" />

      <div className="sub-heading">Updating nested objects</div>
      <p>
        Trying to updated objects nested within an object is more complicated.
        Spread doesn't work that deep !!!
      </p>
      <p>Instead, spread and spread again</p>
      <img src="UpdatingObjects.JPG" alt="" />
      <div className="sub-heading">Simplifying Logic</div>
      <p>Getting data can prove tricky, this is where immer comes in </p>

      <NotesTrial />
    </div>
  );
};

export default Notes;
