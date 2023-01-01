import React from "react";
import Scatter_Plot from "./components/Scatter_Plot";
import Bar_chart from "./components/Bar_chart";

function App() {
  return (
    <div className="App">
    <h2 style={{textAlign:"center"}}>Scatter Plot Chart</h2>
     <Scatter_Plot />
     <h2 style={{textAlign:"center"}}>Bar Chart</h2>
     <Bar_chart />
    </div>
  );
}

export default App;
