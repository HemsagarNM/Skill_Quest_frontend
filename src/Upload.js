import { useState ,prevState } from 'react';
import * as React from 'react';
import axios from 'axios';
import './index.css'


const Upload = () => {
    const [files, setFiles] = useState (null);
    const [ progress, setProgress ] = useState({ started: false, pc: 0 });
    const [msg, setMsg ] = useState(null);
    const FormData = require('form-data');
    // const fs = require('fs');
    const handleUpload = async() => {
        if (!files) {
        setMsg("No file selected");
        return;
        }
        const data = new FormData();
        for (let i=0; i<files.length; i++) {
            data.append('files', (files[i]));
        }
        setMsg("Uploading...");
        const token = localStorage.getItem('accessToken');
        console.log(`Bearer ${token}`)
        setProgress (prevstate => {
        return {...prevState, started: true}
        })
    
       
        try {
         await axios.post(`http://127.0.0.1:8000/list/uploadresumes/Research`,{
            headers: { 
                'Authorization' : 
                // 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfbGV2ZWwiOjIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9za2lsbHF1ZXN0LWNjYmVkIiwiYXVkIjoic2tpbGxxdWVzdC1jY2JlZCIsImF1dGhfdGltZSI6MTcxNTg4ODkzOCwidXNlcl9pZCI6Ijg4R3ZiYW10ekRUb0Z1QzZtdHZLMk1lTGFmRjMiLCJzdWIiOiI4OEd2YmFtdHpEVG9GdUM2bXR2SzJNZUxhZkYzIiwiaWF0IjoxNzE1ODg4OTM4LCJleHAiOjE3MTU4OTI1MzgsImVtYWlsIjoiaGVtc2FnYXJnb3dkYTI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhlbXNhZ2FyZ293ZGEyNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.b8fvY84rc-I8U2kYNN7241qk-fA9qRsAPta0yBCYgtLfQUPyUz5nadUBTcSK8ugf1VtThNVFst4cQiujYiPyTDF-emiR1svH5-0F5uKb96gce7rOW1iJEp39VjmHz3L3Qmo_BJrVv1Hh0AGk0hj8jsObCNAxsbiNf2hF_TalHThXpDBdI9rNVBKOT_JOCh5AITUn72XVkt_J5qKl5T4iWwTyFgkqKM3yQpJaUYNBkOQVlFYchTLtISJDiRWzuP3Dp5MwEIpkHqgfFxiZ9vLhEu_qTp4O_hSc-j3l-YF6P48gX99kguxFY7M_R2dwCGps71be_zm4HABl30AJ1qHejQ'
                `Bearer ${token}`
              } , data
          }
          )
          .then((response) => {
                    setMsg("Upload Successful");
                    console.log(response.data);
            })
        }
            catch(err) {
                setMsg("Upload failed");
                console.error(err);
            }
        }
    return(
        <div className="UploadStyle" >
    <h1>Upload Resumes</h1><br/>
    <input onChange={ (e) => { setFiles(e.target.files) } } type="file" multiple/>
    <br/>
    <button className="UploadButton" onClick={ handleUpload } > Upload </button>
    { progress.started && <progress max="100" value={progress.pc}> </progress>}
    { msg && < span>{msg}</span> }
    </div>
    );
}

export default Upload