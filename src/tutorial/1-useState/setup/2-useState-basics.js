import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hello Tino");

  const onClickevent = () => {
    if (text === "hello Tino") {
      setText("Wadza Is fine");
    } else {
      setText("hello Tino");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={onClickevent}>
        Click
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
