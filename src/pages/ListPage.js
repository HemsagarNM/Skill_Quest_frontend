import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Result from './ResultPage';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { AlignHorizontalCenter } from '@mui/icons-material';
import "./listcontainer.css"
const CACHE_KEY = 'listsCache';
const CACHE_EXPIRY = 1000 * 60 * 60;

const Lists = () => {
    const navigate= useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('accessToken')) 
            navigate('/');
      });
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BEARER_TOKEN = localStorage.getItem('accessToken')

  const Listhandle = (list1) =>{
    console.log('listhandle')
    const navigate=useNavigate();
      return()=>{
        // navigate(`/Results`)
        <Result list_name ={list1}/>
      }
  }

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const [navEntry] = performance.getEntriesByType('navigation');
const isRefreshed = navEntry && navEntry.type === 'reload';
    if (cachedData && !isRefreshed) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY) {
        setLists(data);
        setLoading(false);
        return;
      }
    }
    axios.get('http://127.0.0.1:8000/list/',{
     headers: {
           'Authorization': `Bearer ${BEARER_TOKEN}`
         }
    })
      .then(response => response.data)
      .then(data => {
         const sortedListNames = data.sort((a, b) => a.localeCompare(b));
        setLists(sortedListNames);
        setLoading(false);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: sortedListNames, timestamp: Date.now() }));
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{color:'black'}}>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if(!localStorage.getItem('accessToken'))
    {
      navigate('/login');
      return null;
    }
  

  return (
    <div className='list' style={{color: "#252525" ,  letterSpacing: 'normal'}}>
      <h1></h1><br/>
      <ListContainer lists={lists} />
    </div>
  );
};

const ListContainer = ({ lists }) => {
  return (
    <div className='list-Container'>
      {lists.map((list, index) => (
        <List key={index} name={list} />
      ))}
    </div>
  );
};

const List = ({ name }) => {
  return (
    <div  className="list-item main-content" >
      <Link to={`/Results/${name}`}>
      <h2>{name}</h2>
    </Link>
    </div>
  );
};

export default Lists;
