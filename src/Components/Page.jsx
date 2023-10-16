import "./Style/Page.css";
import { useState } from "react";
import Menu from "./Menu";
import Info from "./Info";

const Page = () => {
  const [selectedPage, setSelectedPage] = useState("Cover");

  return (
    <div className="Page">
      <Menu changeSelected={(page) => setSelectedPage(page)} />
      <Info setPage={selectedPage} />
    </div>
  );
};

export default Page;
