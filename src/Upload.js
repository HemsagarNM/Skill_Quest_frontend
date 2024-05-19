import { useState ,prevState } from 'react';
import * as React from 'react';
import axios from 'axios';
import './index.css'


import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
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
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfbGV2ZWwiOjIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9za2lsbC1xdWVzdC1ocml0aGlrIiwiYXVkIjoic2tpbGwtcXVlc3QtaHJpdGhpayIsImF1dGhfdGltZSI6MTcxNjA2NTM5MywidXNlcl9pZCI6IllZbmY3RWc3SjFaQkNjVmFWeFlQNUU0VW1XbDEiLCJzdWIiOiJZWW5mN0VnN0oxWkJDY1ZhVnhZUDVFNFVtV2wxIiwiaWF0IjoxNzE2MDY1MzkzLCJleHAiOjE3MTYwNjg5OTMsImVtYWlsIjoiaHJpdGhpa3NoZXQxMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJocml0aGlrc2hldDExQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.n8i-f2e0S5hQjKU4sNMcgtajXTTxiPuBU0EPQUFLLFmgdKtnGHF11oQ0Yti0sf15VjA46jNKsU5NwDDLCYMzv-lGFFOYlLrz7XwusdpA7hJNxaR3vC3yzQxOCN27s2VAd6IRJdwZavgHiZjbXx8ORoLFpuqNG5IO8CxpWKIfFAG_MZLcVA1JuR7jjIMGgMQUVaL7lmyVk1zSSSf6zKH5MJRA8TMpPJgptR5sWxfqg7q9kQkNkGII9SE2KM_bcE1HZKViNTnOqh8fOMtSFxK2KWzd-jAAxFtVuGtmvUCF0ImkJX2NhH2NxR24cElesnAfuoslQQj8F3DLUB6VC-1dFQ',
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
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
