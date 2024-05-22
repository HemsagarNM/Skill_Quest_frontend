import Menu from "./HomeMenu";

import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [textInput, setTextInput] = useState("");
  const BEARER_TOKEN = localStorage.getItem('accessToken')

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFiles) {
      alert("Please select files first!");
      return;
    }

    let data = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      data.append('files', selectedFiles[i]);
    }

    try {
      const response = await axios.post(`http://localhost:8000/list/uploadresumes/${textInput}`, data, {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Files</button>
      <input type="text" value={textInput} onChange={handleTextChange} placeholder="Enter text" />
    </div>
  );
};

export default FileUpload;
