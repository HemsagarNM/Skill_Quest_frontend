import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';


const HomePage = () => {
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
        console.log('Bearer '+token)
        setProgress (prevstate => {
        return {...prevState, started: true}
        })
    
       
        try {
         await axios.post('http://127.0.0.1:8000/list/uploadresumes/NewList',{
            headers: { 
                'Authorization' : `Bearer ${token}`
              },
              data :data
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
        <div className="App" >
    <h1>Uploading Resumes</h1>
    <input onChange={ (e) => { setFiles(e.target.files) } } type="file" multiple/>
    <button onClick={ handleUpload } > Upload </button>
    { progress.started && <progress max="100" value={progress.pc}> </progress>}
    { msg && < span>{msg}</span> }
    </div>
    );
}

export default HomePage