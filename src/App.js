import React, { useEffect } from "react";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
