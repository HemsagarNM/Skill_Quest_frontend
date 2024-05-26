import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StandardResume from '../components/resumeComponents/StandardResume';

const BEARER_TOKEN = localStorage.getItem('accessToken');

const ResumeDetailsPage = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/list/${id}`, {
          headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`
          }
        });
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, [id]);

  if (!resume) return <div>Loading...</div>;

  return <StandardResume {...resume} />;
};

export default ResumeDetailsPage;
