import Components from "./Components";
import Conditionals from "./Conditionals";
import Cover from "./Cover";
import Events from "./Events";
import Lists from "./Lists";
import Props from "./Props";

const Info = ({ setPage }) => {
  return (
    <>
      {setPage === "Cover" && <Cover />}
      {setPage === "Components" && <Components />}
      {setPage === "Conditionals" && <Conditionals />}
      {setPage === "Events" && <Events />}
      {setPage === "Lists" && <Lists />}
      {setPage === "Props" && <Props />}
    </>
  );
};

export default Info;
