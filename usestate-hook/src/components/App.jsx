import React  from "react";






function App() {
  var [count, setCount]= React.useState(0);
  return (
    
    <div className="container">
     
    <h1>{count}</h1> 
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>);
}

export default App;
