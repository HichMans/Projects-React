import React, { useState } from "react";


function App() {
  let now = new Date().toLocaleTimeString();
  setInterval(setTimenow, 1000);
  const [time,setTime]=useState(now);
  function setTimenow (){
    const currentTime =new Date().toLocaleTimeString();
    return setTime(currentTime);
  }
  
  return (
    <div className="container">
      <h1> {time} </h1>
      <button onClick={setTimenow} >Get Time</button>
    </div>
  );
}

export default App;
