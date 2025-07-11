import "./App.css";
import {React, useState} from "react";
function App() {
  return (
    <div className=" container h-screen flex justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-2xl font-medium text-blue-500 mb-4">
        URL Shortener
        </h1>  
        <div>
          <input className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
            type="text"
            placeholder="Enter link to be shortened"></input>
            
          <button className=" bg-blue-500 text-white px-8 py-3 ml-4 rounded-md">
            Submit URL
          </button>
        </div>
      </div> 
    </div>
  );
}
export default App;

