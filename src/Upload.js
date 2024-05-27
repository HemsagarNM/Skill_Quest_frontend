import { useState ,prevState } from 'react';
import * as React from 'react';
import axios from 'axios';
import './index.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const FileUpload = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('accessToken')) 
            navigate('/');
      });
    const [ progress, setProgress ] = useState({ started: false, pc: 0 });
    const [msg, setMsg ] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFiles) {
        setMsg("No file selected");
        alert("Please select files first!");
        return;
    }
    

    let data = new FormData();
    selectedFiles.forEach(file => {
        data.append('files', file);
      });
    const accessToken = localStorage.getItem('accessToken');

    setMsg("Uploading...");

    console.log(`Bearer ${accessToken}`);
        setProgress (prevstate => {
        return {...prevState, started: true}
        })

    // try {
      const response = await axios.post(`http://localhost:8000/list/uploadresumes/${textInput}`, data, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        setMsg("Upload Successful");
        console.log(response.data);
        setProgress({
            pc: 100
        })
});
      console.log("Response:", response.data);

    // } 
    // catch (error) {
    //     setMsg("Upload failed");
    //   console.error("Error uploading files:", error);
    // }
  };

   

  return (
    <p className="main-content">
    <div className="UploadStyle">
        <h1 className="large-heading">Upload Resumes</h1><br/>
        <input type="text" value={textInput} className='Uploadtxt' onChange={handleTextChange} placeholder="Enter List Name" />
        <br/><br/>
      <input type="file" multiple onChange={handleFileChange} className='filebtn' style={{ display:'' }}/>
      <br/><br/>
      <button onClick={handleUpload} className='UploadButton'>Upload Files</button>
      <br/>
      { progress.started && <progress max="100" value={progress.pc}> </progress>}
       <br></br><div className='upload_msg'>{ msg && <p>{msg}</p>}</div> 
       
    </div>
    { (selectedFiles.length > 1 ) &&
    <div class="showUpload">  
    <ol className="heading">
    {selectedFiles.map((file,index) => (
        <li key={index}  >
        {file.name}
        </li>
      ))}
      </ol>
      </div>
    }
      </p>
  );
};

export default FileUpload;
