
import axios from "axios";
import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag(){

 const[tag , settag] = useState('car');
 const{gif, loading , fetchdata} = useGif(tag);
  
  function clickHandler(){
    fetchdata(tag);
   
  }
  return(
    <div className="w-[100vw]">
      <div className="w-[50vw] h-[400px] bg-white mx-auto mt-12 flex flex-col items-center rounded-md">
        <h1 className="text-lg font-medium mt-3">A RANDOM GIF</h1>
       {
        loading ?(<Spinner/>):( <img src= {gif} className="mt-4 w-[200px] h-[200px]"/>) 
       }
       <input
         className="mt-2 w-[40vw] bg-green-200"
         value= {tag}
         onChange={(event)=> settag(event.target.value)}
       />
        <button className="mt-2 w-[40vw] bg-green-200" onClick={clickHandler}>GENRATE</button>
      </div>
    </div>
  );
}
export default Tag;