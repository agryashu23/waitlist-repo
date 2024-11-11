import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `http://localhost:3000/api/join-waitlist`,
      {
        email: inputValue.trim(),
      }
    );
    const message = await response.data.message;
    console.log(message);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your data"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
