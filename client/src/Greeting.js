import React from "react";
import "./Greeting.css";

const Greeting = ({ message }) => (
  <div className="greeting">
    <h2>{message}</h2>
    <p>May this Diwali bring joy, health, and prosperity!</p>
  </div>
);

export default Greeting;
