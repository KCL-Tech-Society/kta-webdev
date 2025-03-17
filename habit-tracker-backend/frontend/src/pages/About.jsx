import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontSize: "1.2em",
      }}
    >
      <h1>About Us</h1>
      <p>
        Welcome to our habit tracker application! Our goal is to help you build
        and maintain healthy habits.
      </p>
      <p>With our app, you can:</p>
      <ul>
        <li>Track your daily habits</li>
        <li>Set goals and reminders</li>
        <li>View your progress over time</li>
      </ul>
      <p>
        We hope you find our app useful and that it helps you achieve your
        goals!
      </p>
    </div>
  );
};

export default About;
