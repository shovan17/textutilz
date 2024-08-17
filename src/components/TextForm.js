import React,{useState} from 'react' //{useState} is a hook state



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText("You have clicked on handleUpClick")
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = ()=>{
     // console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText("You have clicked on handleLoClick")
      setText(newText)
      props.showAlert("Converted to lowercase!","success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!","success");
}

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
        
    }

    const handleCopy=()=>{
      //console.log("I am  copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to cipboard!","success");
    }
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!","success");
    }


    const[text, setText] = useState('Enter text here');
  return (
    //paste from docs->form control
    //rows="8" is the size of the box

    //0.008 is the time taken to read one word
    <>
    <div className="container" style={{Color: props.mode ==='dark'?'white':'#343a40'}}>   
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* //first curly brackets to make it javascript, second one to make an object */}
<       textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'#343a40'}} id="myBox" rows="8"/> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>
    <div className="container my-2" style={{Color: props.mode ==='dark'?'white':'#343a40'}}>
      <h2> Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} Minutes read </p> 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  )
}
