import React ,{useState}from 'react';




function TextForm(props) {
    const [text,setText] =useState("Enter text here");
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

    return(
        <>
        
      
<div className="mb-3">
    <h1>{props.heading}</h1>
  <label htmlFor="myBox" className="form-label">Text Area</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary MX-3' onClick={handleUpperCase}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLowerCase}>Convert to Lowercase</button>
<div className='container my-4'>
    <h1>Your Text summary</h1>
    <p>The number of words are {text.split([" "]).length}, and the length of charecter is {text.length}</p>
</div>
<h1>Preview</h1>
<p>{text}</p>
        </>
    )
}

export default TextForm