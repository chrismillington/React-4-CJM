import "./Style/Menu.css";
const Menu = ({ changeSelected }) => {
  return (
    <div className="Menu">
      <ul>
        <li onClick={() => changeSelected("Cover")}>Cover</li>
        <li onClick={() => changeSelected("Components")}>Components</li>
        <li onClick={() => changeSelected("Props")}>Props</li>
        <li onClick={() => changeSelected("Events")}>Events</li>
        <li onClick={() => changeSelected("Condition")}>Conditionals</li>
        <li onClick={() => changeSelected("Lists")}>Lists</li>
        <li onClick={() => changeSelected("Forms")}>Forms</li>
        <li onClick={() => changeSelected("Router")}>Router</li>
        <li onClick={() => changeSelected("Memo")}>Memo</li>
        <li onClick={() => changeSelected("Hooks")}>Hooks</li>
      </ul>
    </div>
  );
};

export default Menu;
