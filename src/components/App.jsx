import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("hello");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }
  function changeBackground() {
    setMousedOver(true);
  }
  function restorebackround() {
    //console.log("left");
    setMousedOver(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={changeBackground}
        onMouseLeave={restorebackround}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
