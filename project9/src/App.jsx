import React from "react";
import Student from "./Student";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Props example</h1>

      <Student name="Rahul" age="20" />
      <Student name="Amit" age="22" />

    </div>
  );
}

export default App;