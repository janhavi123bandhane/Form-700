import React, { useState } from "react";

const FormInput = ({ item1 }) => {
  const [inputValue, setInputValue] = useState(""); // State to track input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value state
  };

  const sendDataToBackend = () => {
    // Simulate sending data to backend (log to console)
    console.log("Data sent to backend:", { label: item1, value: inputValue });
  };

  return (
    <div className="flex flex-col mb-2">
      <label>{item1}</label>
      <input
        type="text"
        id="firstName"
        className="border border-black p-2 rounded-md"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={sendDataToBackend}>Save Data</button>
    </div>
  );
};

export default FormInput;
