import { useState ,prevState } from 'react';
import * as React from 'react';
import axios from 'axios';
import './index.css'


const FileUpload = () => {
    const [ progress, setProgress ] = useState({ started: false, pc: 0 });
    const [msg, setMsg ] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [textInput, setTextInput] = useState("");

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
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
    for (let i = 0; i < selectedFiles.length; i++) {
      data.append('files', selectedFiles[i]);
    }
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
    <div className="UploadStyle">
        <h1>Upload Resumes</h1><br/>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Files</button>
      { progress.started && <progress max="100" value={progress.pc}> </progress>}
        { msg && < span>{msg}</span> }
      <input type="text" value={textInput} onChange={handleTextChange} placeholder="Enter text" />
    </div>
  );
};

export default FileUpload;
