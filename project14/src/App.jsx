import React, { useState } from "react";

function CheckboxExample() {
  const [skills, setSkills] = useState([]);

  // Handle checkbox change
  const handleCheckbox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // Add value
      setSkills([...skills, value]);
    } else {
      // Remove value
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h3>Select Skills:</h3>

      <label>
        <input type="checkbox" value="HTML" onChange={handleCheckbox} />
        HTML
      </label>

      <label>
        <input type="checkbox" value="CSS" onChange={handleCheckbox} />
        CSS
      </label>

      <label>
        <input type="checkbox" value="JavaScript" onChange={handleCheckbox} />
        JavaScript
      </label>

      <label>
        <input type="checkbox" value="React" onChange={handleCheckbox} />
        React
      </label>

      <h4>Selected Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxExample;