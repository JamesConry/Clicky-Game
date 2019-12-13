import React from "react";
import "./style.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function Image(props) {
  return (
    <div role="img" onClick={() => props.clickCount(props.id)} aria-label="click item">
      <img alt={props.name} src={props.image} className="click-item"/>
    </div>
  );
}

export default Image;
