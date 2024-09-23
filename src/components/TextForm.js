import React ,{useState}from 'react';




function TextForm(props) {
    const [text,setText] =useState("");
    // console.log(text)

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowerCase = () => {
        let newText= text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
       setText(""); 
    }

    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpace = () => {
        let newText= text.split(/[ ]+/);
        console.log(newText)
        setText(newText.join(" "))
    }

    
    return(
        <>
        
      
<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
  <label htmlFor="myBox" className="form-label">Text Area</label>
  </div>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>

<button className='btn btn-primary mx-2 my-2' onClick={handleUpperCase}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleLowerCase}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleClearText}>Clear Text</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace}>Remove extra spaces</button>

<div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your Text summary</h1>
    <p>The number of words are<b> {text.split([" "]).length}</b>, and the length of charecter is {text.length}</p>

<h1>Preview</h1>
<p>{text}</p>
</div>
        </>
    )
}

export default TextForm