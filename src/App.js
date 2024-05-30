import { useState } from "react";
import axios from "axios"

function App() {
  const [excuse,setexcuse]=useState("It must be a hardware issue, not my code problem.")
  const fetchdata=async(ex)=>{
    const {data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/`)
    setexcuse(data[0].excuse)
  }
  return (
    <div className="flex justify-center items-center flex-col gap-5 min-h-screen ">
     <h1 className="flex font-bold text-4xl ">Generate An Excuse</h1>
     <div className="flex flex-col gap-4">
      <button onClick={()=>{fetchdata("funny")}} className="flex px-8 py-6 text-xl font-semibold rounded-md bg-yellow-500">Funny</button>
      <button onClick={()=>{fetchdata("developers")}} className="flex px-8 py-6 text-xl font-semibold rounded-md bg-pink-500">Developer</button>
      <button onClick={()=>{fetchdata("office")}} className="flex px-8 py-6 text-xl font-semibold rounded-md bg-red-500">Office</button>
     </div>
     <h1 className="font-semibold text-xl">{excuse}</h1>
    </div>
  );
}

export default App;
