import React, { useState } from "react";

function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h1>Props Example</h1>

      <Student name="Rahul" age="20" />
      <Student name="Rmit" age="22" />
    </div>
  );
}

export default App;