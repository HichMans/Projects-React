import React from "react";
import Login from "./Login";
var isLogged= false;
var currenTime=new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* Tenary operator */}
      {isLogged? <h1>Hello</h1> : <Login/>}
      {/* {currenTime < 12 && <h1>why you still working!</h1>} */}
    </div>
  );
}

export default App;
