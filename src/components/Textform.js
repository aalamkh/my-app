import React,{useState} from 'react'
export default function Textform(props) {
    const [text, setText] = useState(' ');
  
    const btnUpercse=()=>{
     let newText = text.toUpperCase()
     setText(newText)
      }

      const btnLwercse=()=>{
     let newText = text.toLowerCase()
        setText(newText)
        }
        const btnClearcse=()=>{
            let newText = ''
               setText(newText)
               }
    

    const handleChange=(event)=>{
       setText(event.target.value);
        
      }
  return (
<>
      <div className='container'>
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} style={{background:props.mode ==='light'?'grey':'white'}} id="formbox" rows="6"></textarea>
</div>
<button type="button" className="btn btn-primary btn-sm mx-2" onClick={btnUpercse}>GET UPPER CASE</button>
<button type="button" className="btn btn-primary btn-sm mx-2" onClick={btnLwercse}>GET Lower CASE</button>
<button type="button" className="btn btn-primary btn-sm mx-2" onClick={btnClearcse}>Clear</button>


</div>
  
  <div className='container my-4'>
   
    <h2>Text Summary</h2>
    <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== " ";
                })).length} words and {text.length} characters </p>
     <p>{0.008 * text.split(" ").length} read duration</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"write something in Textbox"}</p> 
   </div>
</>
  )
}
