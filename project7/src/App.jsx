import React, { useState } from "react";

function App() {

  // 1. Define state
  const [show, setShow] = useState(false);

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>Toggle Example in React</h1>

      {/* 2. Button to update state */}
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {/* 3. Condition for hide and show */}
      {show && (
        <div>
          <h2>Hello! This content is visible now.</h2>
          <p>This text appears when the button is clicked.</p>
        </div>
      )}

    </div>
  );
}
export default App;