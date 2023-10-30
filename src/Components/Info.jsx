import Components from "./Components";
import Conditionals from "./Conditionals";
import Cover from "./Cover";
import Events from "./Events";
import Lists from "./Lists";
import Props from "./Props";
import Forms from "./Forms";
import Notes from "./Notes";
import Router from "./Router";
import Hooks from "./Hooks";

const Info = ({ setPage }) => {
  return (
    <>
      {setPage === "Cover" && <Cover />}
      {setPage === "Components" && <Components />}
      {setPage === "Conditionals" && <Conditionals />}
      {setPage === "Events" && <Events />}
      {setPage === "Lists" && <Lists />}
      {setPage === "Props" && <Props />}
      {setPage === "Forms" && <Forms />}
      {setPage === "Router" && <Router />}
      {setPage === "Hooks" && <Hooks />}
      {setPage === "Notes" && <Notes />}
    </>
  );
};

export default Info;
