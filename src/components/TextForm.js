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


    const[text, setText] = useState('');
  return (
    //paste from docs->form control
    //rows="8" is the size of the box

    //0.008 is the time taken to read one word
    <>
    <div className="container" style={{Color: props.mode ==='dark'?'white':'#042743'}}>   
       <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          {/* //first curly brackets to make it javascript, second one to make an object */}
<       textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'#343a40'}} id="myBox" rows="8"/> 
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>
    <div className="container my-2" style={{Color: props.mode ==='dark'?'white':'#042743'}}>
      <h2> Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p> 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
