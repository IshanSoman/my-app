import React,{useState}from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const handleUpClick= ()=>{
    // console.log("Button is clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleLoClick= ()=>{
    // console.log("Button is clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");

  }
  const handleOnChange= (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const handleClearText= ()=>{
      let newText=" ";
      setText(newText);
      props.showAlert("Text Cleared!","success");

  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Done with removal of Extra Spaces!","success");

  }
  // text='new text' Wrong way
  // setText("New text");

  const handleCopy=()=>{
    console.log("I am copy");
    let text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");

  }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Spaces</button>
      </div>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes required to read the whole text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it!"}</p>
    </div>
    </>
  )
}
