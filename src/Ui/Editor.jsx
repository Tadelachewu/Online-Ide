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
    gridGap: "30px",
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
   const langu={
    position:'relative',
    left:'25%',
    padding:'10px',
    color:'blue',
    backgroundColor:'golden',
    fontSize:'6PX'
   }
 const signout={
  position:'relative',
  left:'60%',
  backgroundColor:'black',
  color:'white',
  padding:"5px",
  borderRadius:'10px'
 }
 

 const buttons = {
  width:'30%',
  height:'30%',
  backgroundColor:'rgb(8,0,10)',
  display:'flex',
  gap:'30px',
}

const buttonStyle = {
  backgroundColor: 'green',
  fontSize:'20px',
  color: 'white', // Set text color to white
  marginRight: '5px', // Add some spacing between buttons
};
    return (
    <div>
    <div className="buttons" style={buttonStyl}>  



    <div style={buttons}>
  <button style={buttonStyle} onClick={() => handleClick('run')}>Run</button>
  <button style={buttonStyle} onClick={() => handleClick('save')}>Save</button>
  <button style={buttonStyle} onClick={() => handleClick('chat')}>Chat</button>
  <button style={buttonStyle} onClick={() => handleClick('help')}>Help</button>
  <button style={buttonStyle} onClick={() => handleClick('upload')}>Upload</button>
  <button style={buttonStyle} onClick={() => handleClick('download')}>Download</button>
</div>


        <div className="LANGUAGE" style={langu}>
      <select value={lang} onChange={(e)=>setLang(e.target.value)} style={{ width: '200px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} >
        <option value="c++">c++</option>
        <option value="c">c</option>
        <option value="java">java</option>
        <option value="python">python</option>
        <option value="nodejs">node js</option>
        <option value="flutter">flutter</option>
        <option value="web">web</option>
      </select>


      <span > 
      <button style={signout} onClick={handleSignOut}>Sign Out</button>
      </span>

    </div>

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
      
      </div>);
}
export default EditorOnline;

