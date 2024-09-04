import React, { useState } from 'react';

function DynamicInput() {
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>You typed: {input}</p>
    </div>
  );
}

export default DynamicInput;
