import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    Name: "Tinotenda",
    Surename: " Nyashanu",
    Title: "Mr",
  });
  const onclickevent = () => {
    if (person.Title === "Mr") {
      setPerson({ ...person, Title: "mrs" });
    } else {
      setPerson({ ...person, Title: "Mr" });
    }
  };
  return (
    <>
      <h3>{person.Name}</h3>
      <h3>{person.Surename}</h3>
      <h3>{person.Title}</h3>

      <button className="btn" onClick={onclickevent}>
        Click to make changes{" "}
      </button>
    </>
  );
};

export default UseStateObject;
