import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Detail from "./components/Detail";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#292A4A";
      document.title = "Text Counter Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text Counter";
    }
  };

  return (
    <>
        <div className="big-container">
      <Router>
          <Navbar title="Text Counter" mode={mode} toggleMode={toggleMode} />
        <div className="container">
        <Detail title={"Enter Your Text"} mode={mode} />
        </div>
        <div className="container">
        <Routes>
          {/* <Route exact path="/home" element={<Detail/>}></Route> */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </div>
      </Router>
        </div>
      <Footer />
    </>
  );
}

export default App;
