import Random from "./components/Random"
import Tag from "./components/Tag";
import React from "react";
export default function App() {
  return (

    <div className="w-full min-h-screen p-8 flex flex-col background relative overflow-x-hidden items-center">
     <h1 className="absolute bg-white w-11/12 mx-auto text-center font-semibold rounded-md">RANDOM GIFS</h1>
     <div>
      <Random/>
       <Tag/>
     </div>
    </div>

  );
}
