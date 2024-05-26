import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const JsonRenderer = ({ data }) => {
    const renderContent = (key, value) => {
      if (Array.isArray(value)) {
        return (
          <div key={key}>
            <strong>{key}:</strong>
            <ul>
              {value.map((item, index) => (
                <li key={index}>{renderContent(index, item)}</li>
              ))}
            </ul>
          </div>
        );
      } else if (typeof value === 'object' && value !== null) {
        return (
          <div key={key}>
            <strong>{key}:</strong>
            <ul>
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>{renderContent(subKey, subValue)}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return (
          <div key={key}>
            <strong>{key}:</strong> {value.toString()}
          </div>
        );
      }
    };
  
    return <div>{Object.entries(data).map(([key, value]) => renderContent(key, value))}</div>;
  };



const ResumeView = ()=>{
    const { resume_id, list_name } = useParams();
    const navigate= useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BEARER_TOKEN = localStorage.getItem('accessToken')
    
    useEffect(() => {
        if(!localStorage.getItem('accessToken')) 
            navigate('/')
        axios.get(`http://127.0.0.1:8000/list/${list_name}/${resume_id}`,{
         headers: {
               'Authorization': `Bearer ${BEARER_TOKEN}`
             }
        })  
        .then(response => response.data)
        .then(data => {
          setData(data);
          setLoading(false);
          JSON.stringify(data);
          String(data);
          console.log(data)
        })
        .catch(error => {
          setLoading(false);
        });
    },[]);
  
  
    if (loading) return (
    <div style={{color: "#252525", textAlign: 'center'}}>Loading...</div>
    );
    if (error) return <div>Error: {error.message}</div>;
    // if (!data) return <div>No data available</div>;
    
        return(
            <div>
            <h1>JSON Data</h1>
            <div> {data}</div>
            </div>
    )
};

export default ResumeView;