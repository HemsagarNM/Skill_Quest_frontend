import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect

 } from "react";
const Logout = () =>{
    const navigate=useNavigate();
    console.log(localStorage.getItem('accessToken'))
    useEffect(()=> {
        localStorage.clear();
        navigate('/login');
    }, []);
    console.log(localStorage.getItem('accessToken'))
    return;

}
export default Logout