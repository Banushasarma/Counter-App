import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useDocumentTitle(`${input} has clicked ${count}`);
  return (
    <div>
      <input
        type="text"
        name="input"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>
        {input} clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
