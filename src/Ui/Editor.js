import AceEditor from "react-ace";
import {useState} from "react";
import React, { Fragment } from 'react';
//import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-monokai';
//import 'ace-builds/src-noconflict/theme-solarized_light';
//import 'ace-builds/src-noconflict/theme-chrome';
//import 'ace-builds/src-noconflict/theme-clouds';
//import 'ace-builds/src-noconflict/theme-twilight';
//import 'ace-builds/src-noconflict/theme-tomorrow';
const EditorOnline = ()=>{

    const [editorValue, setEditorValue] = useState("Enter your text here...");

    const [output, setOutput] = useState("");
  const handleClick = (action) => {
    if (action === 'run') {
        if (action === 'run') {
            try {
              // Execute the code here
              const result = eval(editorValue); //  Using eval can be dangerous and is not recommended for production use. Consider using a safer alternative like a sandboxed JavaScript execution environment.
              setOutput(result);
            } catch (error) {
              setOutput("Errory: " + error.message);
            }
      
    }
 } else if (action === 'save') {
      // Handle save action
    } else if (action === 'chat') {
      // Handle chat action
    } else if (action === 'help') {
      // Handle help action
    }
    else if (action === 'upload') {
        // Handle upload action
      } else if (action === 'download') {
        // Handle load action
      } 
  };


  const handleChange = (newValue) => {
    setEditorValue(newValue);
  };

  const buttonStyl = {
    backgroundColor: 'gray',
    color: 'white',
  gridGap: "10px",
    fontSize:"20px"

  }


  const outputStyle={
    backgroundColor:"gold",
    padding:"30px",
    border:"solid black",
    position:"relative",
    right:"80px"
  }


    return (
    <div>
    <div className="buttons" style={buttonStyl}>  
        <button style={{backgroundColor:"green"}} onClick={() => handleClick('run')}>Run</button>
        <button style={{backgroundColor:"green"}}onClick={() => handleClick('save')}>Save</button>
        <button style={{backgroundColor:"green"}} onClick={() => handleClick('chat')}>Chat</button>
        <button style={{backgroundColor:"green"}} onClick={() => handleClick('help')}>Help</button>
        <button style={{backgroundColor:"green"}} onClick={() => handleClick('upload')}>upload</button>
        <button style={{backgroundColor:"green"}} onClick={() => handleClick('download')}>download</button>
        
    </div>
    <div className="editorcss">  
        < AceEditor
          theme="monokai"
          mode="javascript"
          value={editorValue}
          onChange={handleChange}
          name="my-ace-editor"
          editorProps={{ $blockScrolling: Infinity }}
          setOptions={{ useWorker: false }} // Disable worker to prevent delay in rendering
          />
      </div> 
      <div className="output"  style={outputStyle}>{output}</div>
      </div>);
}
export default EditorOnline;