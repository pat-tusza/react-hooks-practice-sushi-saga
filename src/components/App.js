import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  
  
  
  
  return (
    <div className="app">
      <SushiContainer api= {API} />
      <Table />
    </div>
  );
}

export default App;
