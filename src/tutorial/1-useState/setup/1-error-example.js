import React from "react";
let tilel = "Lets start";
const onClick = () => {
  tilel = "the title changed";
  console.log(tilel);
};
const ErrorExample = () => {
  return (
    <React.Fragment>
      <h2>{tilel}</h2>
      <button type="button" className="btn" onClick={onClick}>
        click me
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
