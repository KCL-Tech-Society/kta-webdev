import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";

// root is the entry point for the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app using the BrowserRouter and Routes components from react-router
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
