import {useState, useEffect } from "react";

let useFetch=(url)=>{
    let [data,setdata]=useState([]);
    useEffect(
        ()=>{
             fetch(url)
      .then(res => res.json())
      .then(data => setdata(data));
  
        },
        []

    )
    return(
        [data,setdata]
    )
}
export default useFetch;