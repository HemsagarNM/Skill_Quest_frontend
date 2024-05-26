import React, { useEffect, useState } from 'react';
import ResumeList from './ResumeList';
import '../index.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CACHE_KEY_PREFIX = 'resultCache_';
const CACHE_EXPIRY = 1000 * 60 * 60;

const Result = () => {
  const { list_name } = useParams();
  const navigate= useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BEARER_TOKEN = localStorage.getItem('accessToken')
const cacheKey = `${CACHE_KEY_PREFIX}${list_name}`;

  useEffect(() => {
  const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY) {
        setData(data);
        setLoading(false);
        return;
      }
    }
     axios.get(`http://127.0.0.1:8000/list/${list_name}/rankresumes`,{
      headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`
          }
     })
      .then(response => response.data)
      .then(data => {
        const sortedData = data.sort((a, b) => b.score - a.score);
        setData(sortedData);
        setLoading(false);
localStorage.setItem(cacheKey, JSON.stringify({ data: sortedData, timestamp: Date.now() }));
      })
      .catch(error => {
        setLoading(false);
      });
  },[]);


  if (loading) return (
  <div style={{color: "#252525", textAlign: 'center'}}>Loading...</div>
);
  if (error) return <div>Error: {error.message}</div>;
  if(!localStorage.getItem('accessToken')) {
  navigate('/');
  return null;
}
   
  return (
    <div className="App" style={{color: "#252525" ,  letterSpacing: 'normal'}}>
      <h1 style={{color: '#7f56da' }}>Resume List</h1>
      <ResumeList data={data} />
    </div>
    
  );
};

export default Result;

