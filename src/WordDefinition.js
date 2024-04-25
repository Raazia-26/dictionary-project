import React from "react";
import "./WordDefinition.css";
import Meaning from "./Meaning";
export default function WordDefinition(props) {
  if (props.data) {
    return (
      <div className="WordDefinition">
        <h1> {props.data.word}</h1>
        <h5> {props.data.phonetic}</h5>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
