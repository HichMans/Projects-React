import React, { useState } from "react";


function ToDoItem (props){

const[isDone,setDone]=useState(false);

function handelClick(){

setDone((prev)=>{
    return !prev;
});


}
//

return <li style={{textDecoration: isDone ? "line-through": "none" }} onClick={handelClick}>{props.item}</li>
}

export default ToDoItem;