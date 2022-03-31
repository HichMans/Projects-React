import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function Card(props) {
    return (
      <div className="card">
        <div className="top">
         
          <h2 className="name">{props.name}</h2>
         <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail infoDetail={props.tel}/>
          <Detail infoDetail={props.email}/>
        </div>
      </div>
    );
  }
  export default Card;