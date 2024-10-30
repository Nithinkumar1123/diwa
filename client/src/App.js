import React, { useState } from "react";
import axios from "axios";
import Greeting from "./Greeting";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", { name });
      setGreeting(`🎉 Happy Diwali, ${response.data.user.name}! 🎉`);
    } catch (error) {
      console.error("Error saving name:", error);
    }
  };

  return (
    <div className="app">
      <h1>🪔 Diwali Celebration 🪔</h1>
      <p className="subtext">Enter your name to receive a personalized Diwali greeting!</p>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn">🎆 Submit 🎇</button>
      </form>
      {greeting && <Greeting message={greeting} />}
      <div className="fireworks"></div>
    </div>
  );
}

export default App;
