import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <p>{input}</p>
    </div>
  );
}

export default App;
