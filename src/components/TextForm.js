import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick =()=> {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Upeercase", "success");
  }
  
  const handleLoClick =()=> {
    let newText =text.toLocaleLowerCase();
    setText(newText)
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }
  
  const handleDigitClick = () =>{
    let newText = typeof(text);
    setText(newText)
  }
  
  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value)

  }

  const handleCopyClick = ()=> {
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text,setText] = useState('');  
  return (
    <>
      <div className="container" style={ {color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>  
      <form>
  <div className="form-group my-3">
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={ {backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }} rows="8"></textarea>
  </div>
  <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
  <button type="button" onClick={handleLoClick} className="btn btn-primary mx-1">Convert to Lowercase</button>
  <button type="button" onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
  <button type="button" onClick={handleDigitClick} className="btn btn-primary mx-1">Type of Text</button>
  <button type="button" onClick={handleCopyClick} className="btn btn-primary mx-1">Copy Text</button>
  <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Space</button>
</form>
</div>

<div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
  <h3>Your Text Summary</h3>
  <p>{text.split(" ").length} words and {text.length} letters</p>
  <p>{0.008 * text.split(" ").length} words and {text.length} letters</p>
  <h3>Preview</h3>
  <p>{text.length >0? text:"Enter the text to Preview"}</p>
  
</div>

    </>
  );
}
