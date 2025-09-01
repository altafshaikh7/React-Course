import React, { useState } from 'react';

export default function TextForm(props) {
  // state banayi text ke liye
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("Clear was clicked");
    setText("");
  };

  const handleCopyClick = () => {
    console.log("Copy was clicked");
    navigator.clipboard.writeText(text);
  };

  const handleaLtErNaTecAsEClick = () => {
    console.log("Alternating case was clicked");
    let newText = text.split("").map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join("");
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };



  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary -uppercase mx-2 my-2" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary -lowercase mx-2 my-2" onClick={handleLoClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary -clear mx-2 my-2" onClick={() => setText("")}>
        Clear Text
      </button>
      <button className="btn btn-primary -copy mx-2 my-2" onClick={() => navigator.clipboard.writeText(text)}>
        Copy Text
      </button>
      <button className="btn btn-primary -inverse mx-2 my-2" onClick={handleaLtErNaTecAsEClick}>
       aLtErNaTe cAsE
      </button>

    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} min read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
