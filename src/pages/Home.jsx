import React, { useState } from "react"
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
function Homepage(){
    const navigate=useNavigate();
    const [name,setname]=useState();
    function gotouserpage(){
        navigate(`/User/${name}`)
    }
    return(
        <>
        <h1>welocme to home page</h1>
        <input type="text" placeholder="enter your name" onChange={(e)=>{
            setname(e.target.value)
        }} value={name}/>
        <button onClick={()=>gotouserpage()}>procced</button>
        </>
        
    )
}

export default Homepage;