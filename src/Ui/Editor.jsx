import AceEditor from "react-ace";
import {useState} from "react";
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import 'ace-builds/src-noconflict/theme-monokai';
const auth = getAuth();
const EditorOnline = ()=>{

    const [editorValue, setEditorValue] = useState("Enter your text here...");

    const [output, setOutput] = useState("");
    const [lang, setLang] = useState("");
    const navigate = useNavigate();

  const handleClick = (action) => {
    if (action=='run') {
       
            try {
              // Execute the code here
              const result = eval(editorValue); //  Using eval can be dangerous and is not recommended for production use. Consider using a safer alternative like a sandboxed JavaScript execution environment.
              setOutput(result);
            } catch (error) {
              setOutput("Errory: " + error.message);}
          }
        
  
    else if (action === 'save') {
      // Handle save action
    }
     else if (action === 'chat') {
      // Handle chat action
    } 
    else if (action === 'help') {
      // Handle help action
    }
    else if (action === 'upload') {
        // Handle upload action
      } else if (action === 'download') {
        // Handle load action
      } 
  }


  const handleChange = (newValue) => {
    setEditorValue(newValue);
  }

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


  
  const handleSignOut = async () => {
    try {
        await signOut(auth);
        console.log('User signed out successfully');
        navigate('/login'); // Redirect to login page after sign-out
      } catch (error) {
        console.error('Logout error:', error);
        // Handle errors (e.g., display an error message)
      }
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
    <div className="LANGUAGE">
      <select value={lang} >
        <option value="c++">c++</option>
        <option value="c">c</option>
        <option value="java">java</option>
        <option value="python">python</option>
        <option value="nodejs">node js</option>
        <option value="flutter">flutter</option>
        <option value="web">web</option>
      </select>
    </div>
    <div className="editorcss">  
        <AceEditor
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
      <button onClick={handleSignOut}>Sign Out</button>
      </div>);
}
export default EditorOnline;

