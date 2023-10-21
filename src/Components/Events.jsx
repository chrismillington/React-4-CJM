import "./Style/topicPage.css";

const Events = () => {
  const event = (msg) => {
    alert(msg);
  };

  return (
    <div className="info">
      <span onCopy={() => event("")}></span>
      <div className="heading">Events</div>
      <p>
        Events in React are declared with an on prefix , such as onClick. A full
        list of events are available here
      </p>
      <ul>
        <li>
          <span onCopy={() => event("onCopy")}>onCopy </span> + onCut & onPaste
        </li>
        <li>
          <input
            type="text"
            placeholder="onCompositionStart"
            onCompositionStart={() => event("onCompositionStart")}
          />
          + onCompositionEnd & onCompositionUpdate
        </li>
        <li>onKeyDown + onKeyUp & onKeyPress</li>
        <li>onFocus + onBlur</li>
        <li>
          <input type="text" placeholder="onChange" onChange />+ onInput ,
          onInvalid , onReset , onSubmit{" "}
        </li>
        onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter
        onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
        onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp
        onPointerDown onPointerMove onPointerUp onPointerCancel
        onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave
      </ul>
    </div>
  );
};

export default Events;
