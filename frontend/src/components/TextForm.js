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
