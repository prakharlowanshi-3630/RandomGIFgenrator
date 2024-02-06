
import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from './Spinner';
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random(){

  const{gif ,loading , fetchdata} = useGif();
  
  function clickHandler(){
    fetchdata();
   
  }
  return(
    <div className="w-[100vw]">
      <div className="w-[50vw] h-[300px] bg-white mx-auto mt-12 flex flex-col items-center rounded-md">
        <h1 className="text-lg font-medium mt-3">A RANDOM GIF</h1>
       {
        loading ?(<Spinner/>):( <img src= {gif} className="mt-4 w-[200px] h-[200px]"/>) 
       }
        <button className="mt-2 w-[40vw] bg-green-200" onClick={clickHandler}>GENRATE</button>
      </div>
    </div>
  );
}
export default Random;