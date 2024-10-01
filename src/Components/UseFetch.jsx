import { useState, useEffect } from "react";

//Reusable custom hook
const UseFetch = (url) => {
    const[data, setData] = useState();
    
    //to fetching data
    useEffect(()=>{
            fetch(url).then((res)=>res.json()) //This initiates an HTTP request 
            .then((data)=>setData(data)) //For updating variable data, sets the retrieved data to the state variable data
    },[])
    return [data]
    
}

export default UseFetch
