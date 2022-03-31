import React, { useState } from "react";

function App() {
const [inputText, setInpuText]=useState("");
  const [items, setItems]= useState([]);
  
 
   function handleChange(event) {
    const valueItem=event.target.value;
    setInpuText(valueItem);
    
    
   }
 
   function addItem() {
     setItems ( 
       prevItem =>{return [...prevItem,inputText];}   );
       setInpuText("");
   }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( todoItem=><li>{todoItem}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
