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
        // const token = localStorage.getItem('accessToken');
        // console.log('Bearer '+token)
        // setProgress (prevstate => {
        // return {...prevState, started: true}
        // })
    
        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/list/uploadresumes/Newlist2',
        headers: { 
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfbGV2ZWwiOjIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9za2lsbHF1ZXN0LWNjYmVkIiwiYXVkIjoic2tpbGxxdWVzdC1jY2JlZCIsImF1dGhfdGltZSI6MTcxNTc4MTYzOCwidXNlcl9pZCI6Ijg4R3ZiYW10ekRUb0Z1QzZtdHZLMk1lTGFmRjMiLCJzdWIiOiI4OEd2YmFtdHpEVG9GdUM2bXR2SzJNZUxhZkYzIiwiaWF0IjoxNzE1NzgxNjM4LCJleHAiOjE3MTU3ODUyMzgsImVtYWlsIjoiaGVtc2FnYXJnb3dkYTI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhlbXNhZ2FyZ293ZGEyNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.aSdUK6ZN9cHnR0eR7lZrEsyIZytcm5WzdE4gGxxbrIPDsPQuGA2ZnGWQJ2rwkUbhejHvGQHn01cFQHz8ybUhWLpele-5GnbM-Cs4lAXMbwFmLRyFCLTtoL8XjbuCK7aKzmaMrEVHe16dx7wSFaVqlMPes73fZHDLgHmoZ3_AGpzWfxDvrKgKf-eE_N_qfIAyymIruwhEo4z_y2VpPSk15MdzOz2Y7VbUKoN4Tt2eVS3iUkyhdOrWP2BxWsyIJR056f-yt78VyO9c2LG_nXzvHv5sB81ul5ossCszZUO6vV7PjZdrxvkEPMs_9MnFruZvWrAr4gct8d9mHOa8EAubXQ', 
            ...data.getHeaders()
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });

        // try {
        //  await axios.post('http://127.0.0.1:8000/list/uploadresumes/NewList',{
        //     headers: { 
        //         'Authorization' : 'Bearer '+{token},
        //         'Content-Type': 'multipart/form-data',
        //         'accept' : 'application/json'
        //       }
        //   })
        //   ,{
        //     data : data
        //   })
        //   .then((response) => {
        //             setMsg("Upload Successful");
        //             console.log(response.data);
        //     })
        // }
        //     catch(err) {
        //         setMsg("Upload failed");
        //         console.error(err);
        //     }
        // }
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