import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>My counter </h1>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
