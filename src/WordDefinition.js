import React from "react";
export default function WordDefinition(props) {
  if (props.data) {
    return (
      <div className="WordDefinition">
        <h1> {props.data}</h1>
      </div>
    );
  } else {
    return null;
  }
}
