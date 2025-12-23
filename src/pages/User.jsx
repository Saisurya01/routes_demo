import React from "react";
import { useParams } from "react-router-dom";
function Userpage(){
    const {name}=useParams();
    return(
        <h1>hii {name}</h1>
    )
}

export default Userpage;