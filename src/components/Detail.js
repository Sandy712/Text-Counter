import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Detail.css"

export default function Detail(props) {
  const [text, setText] = useState("");

  const upclick = () => {
    let newte = text.toUpperCase();
    setText(newte);
    // event.target.preventDefault();
  };

  const downclick = () => {
    let newte = text.toLowerCase();
    setText(newte);
    // event.target.preventDefault();
  };

  const clearclick = () => {
    // event.target.preventDefault();
    let newte = "";
    setText(newte);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div
        className="conatiner"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="textbox"
            style={{
              background: props.mode === "dark" ? "white" : "dark",
              color: props.mode === "dark" ? " bold dark" : "black",
            }}
            rows="8"
            onChange={handleonchange}
          ></textarea>
          {/* here value is equal to text(enter the text here) */}
        </div>
        <button className="btn btn-primary mx-1" onClick={upclick}>
          Uppercase Switch{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={downclick}>
          Lowercase Switch
        </button>
        <button
          className="btn btn-primary mx-1 btn-danger"
          onClick={clearclick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={copy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1 btn-dark" onClick={speak}>
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <h1 className="head2 my-2">Time taken to reading</h1>
        <p>
          {0.008 * text.split().length} <strong>Reads in Minutes</strong>
        </p>
        <h1 className="head3 my-2">Preview Text Summary</h1>
        <p>{text.length > 0 ? text : "Type Something to Preview"}</p>
      </div>
    </div>
  );
}

Detail.propTypes = {
  title: PropTypes.string,
};
