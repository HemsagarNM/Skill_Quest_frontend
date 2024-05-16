import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Lists = () => {
    const navigate= useNavigate();
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BEARER_TOKEN = localStorage.getItem('accessToken')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/lists/',{
     headers: {
           'Authorization': `Bearer ${BEARER_TOKEN}`
         }
    })
      .then(response => response.data)
      .then(data => {
         const sortedListNames = data.sort((a, b) => a.localeCompare(b));
        setLists(sortedListNames);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if(!localStorage.getItem('accessToken')) 
   navigate('/login')

  return (
    <div className='list' style={{color: "#252525" ,  letterSpacing: 'normal'}}>
      <h1>Lists</h1>
      <ListContainer lists={lists} />
    </div>
  );
};

const ListContainer = ({ lists }) => {
  return (
    <div>
      {lists.map((list, index) => (
        <List key={index} name={list} />
      ))}
    </div>
  );
};

const List = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
   
    </div>
  );
};

export default Lists;