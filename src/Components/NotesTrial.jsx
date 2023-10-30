import React, { useState } from "react";

function NotesTrial() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zip: 94113,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zip: 4044,
      },
    });
  };

  return (
    <>
      <button onClick={handleClick}>Move to Debrecen</button>
      <p> updated zip - {customer.address.zip}</p>;
    </>
  );
}

export default NotesTrial;
