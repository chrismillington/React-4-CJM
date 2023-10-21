import "./Style/topicPage.css";

const Events = () => {
  const event = (e) => {
    alert(e.target.value);
  };

  return (
    <div className="info">
      <div className="heading">Events</div>
      <p>
        Events in React are declared with an on prefix , such as onClick. A full
        list of events are available here
      </p>
      <ul>
        <li>
          <span onCopy={event} value="onCopy">
            onCopy
          </span>
          + onCut & onPaste
        </li>
        <li>
          <input type="text" placeholder="onKeyDown" onKeyDown={event} /> +
          onKeyUp & onKeyPress
        </li>
        <li>
          <input type="text" placeholder="onChange" onChange={event} />+ onInput
          , onInvalid , onReset , onSubmit{" "}
        </li>
        <li>
          <span onClick={event}>onClick</span> & onContextMenu, onDoubleClick
        </li>
        <li>
          <span onDrag={event} value="onCopy">
            onDrag
          </span>
          + onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver,
          onDragStar, onDrop
        </li>
        <li>
          <span onMouseDown={event} value="onMouseDown">
            onMouseDown
          </span>
          & onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver,
          onMouseUp
        </li>
      </ul>
    </div>
  );
};

export default Events;
