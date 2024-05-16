import React, { useEffect, useState } from 'react';
import ResumeList from './ResumeList';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Menu from '../HomeMenu';
import { useParams } from 'react-router-dom';


const Result = () => {
  const { list_name } = useParams();
  const navigate= useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BEARER_TOKEN = localStorage.getItem('accessToken')

  useEffect(() => {
     axios.get(`http://127.0.0.1:8000/list/${list_name}/rankresumes`,{
      headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`
          }
     })
    
    // fetch('http://127.0.0.1:8000/list/Pranith/rankresumes', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${BEARER_TOKEN}⁠`
    //   }
    // })
      .then(response => response.data)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  },[]);

  if (loading) return (
  <div style={{color: "#252525", textAlign: 'center'}}>Loading...</div>
);
  if (error) return <div>Error: {error.message}</div>;
  if(!localStorage.getItem('accessToken')) 
   navigate('/login')
  return (
    <div className="App" style={{color: "#252525" ,  letterSpacing: 'normal'}}>
      <br /><br />
      <h1>Resume List</h1>
      <ResumeList data={data} />
    </div>
    
  );
};

export default Result;


  